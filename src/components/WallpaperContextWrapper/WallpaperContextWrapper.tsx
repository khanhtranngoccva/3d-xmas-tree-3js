import * as React from 'react';
import {Leva, useControls} from "leva";
import {Simulate} from "react-dom/test-utils";
import {Schema} from "leva/plugin";
import {useThree} from "@react-three/fiber";

interface WallpaperContextSchema {
  bloom: number,
  snowInterval: number,
  offsetX: number,
  offsetY: number,
  mapWidth: number,
  mapHeight: number,
  normalBias: number,
}

const defaultValues: WallpaperContextSchema = {
  normalBias: 4,
  mapHeight: 1024,
  mapWidth: 1024,
  offsetX: 0,
  offsetY: 0,
  snowInterval: 30,
  bloom: 3,
};
const levaConfig: Record<keyof WallpaperContextSchema, {
  text: string,
  min: number,
  max: number,
  step: number,
}> = {
  "bloom": {
    "max": 5,
    "min": 0,
    "step": 0.25,
    "text": "Bloom",
  },
  "snowInterval": {
    "max": 60,
    "min": 5,
    "step": 5,
    "text": "Snow interval",
  },
  "offsetX": {
    "max": 1000,
    "min": -1000,
    "step": 20,
    "text": "X-offset",
  },
  "offsetY": {
    "max": 1000,
    "min": -1000,
    "step": 20,
    "text": "Y-offset",
  },
  "mapWidth": {
    "max": 8192,
    "min": 512,
    "step": 512,
    "text": "Shadow map width",
  },
  "mapHeight": {
    "max": 8192,
    "min": 512,
    "step": 512,
    "text": "Shadow map height",
  },
  "normalBias": {
    "max": 12,
    "min": 0.25,
    "step": 0.25,
    "text": "Shadow map width",
  }
};

export const WallpaperContext = React.createContext<WallpaperContextSchema>(defaultValues);

function WallpaperContextWrapper(props: {
  children?: React.ReactNode
}) {
  const [loaded, setLoaded] = React.useState(false);
  const [shown, setShown] = React.useState(false);
  const [state, setState] = React.useState(defaultValues);

  React.useEffect(() => {
    function keydown(e: KeyboardEvent) {
      if (e.altKey && e.ctrlKey && e.key.toLowerCase() === "e") {
        console.log("Activated");
        setShown(c => !c);
      }
    }

    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  }, []);

  React.useEffect(() => {
    const item = localStorage.getItem("config") ?? "{}";
    if (item) {
      const parsed = JSON.parse(item) as WallpaperContextSchema;
      for (let _key in defaultValues) {
        let key = _key as keyof WallpaperContextSchema;
        parsed[key] ??= defaultValues[key];
      }
      setState(parsed);
      setLoaded(true);
    }
  }, []);

  React.useEffect(() => {
    if (loaded) {
      localStorage.setItem("config", JSON.stringify(state));
    }
  }, [loaded, state]);

  return <>
    {loaded && shown &&
        <LevaPanel initialValue={state} config={levaConfig} onChange={state => setState(state)}></LevaPanel>
    }
    <WallpaperContext.Provider value={state}>{props.children}</WallpaperContext.Provider>
  </>;
}

function LevaPanel<T extends Record<string, any>>(props: {
  initialValue: T,
  config: Record<keyof T, Omit<Schema[keyof Schema], "value">>,
  onChange: (data: T) => void
}) {
  const computed = [...Object.entries(props.config)].map(([key, value]: [keyof T, Omit<Schema[keyof Schema], "value">]) => {
    return [key, {
      ...value,
      value: props.initialValue[key],
    }];
  });
  const obj = Object.fromEntries(computed) as Schema;
  const value = useControls(obj) as T;

  React.useEffect(() => {
    props.onChange(value);
  }, [props.onChange, value]);

  return <Leva hidden={false}/>;
}

export default WallpaperContextWrapper;
