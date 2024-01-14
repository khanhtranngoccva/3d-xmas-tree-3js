export type LivelyCallback<Schema extends {} = {}> = (name: keyof Schema, val: Schema[keyof Schema]) => void;

declare global {
  var livelyPropertyListener: LivelyCallback<any>;
}

let listeners = new Set<LivelyCallback<any>>([]);

global.livelyPropertyListener = function (name, val) {
  for (let listener of Array.from(listeners)) {
    listener(name, val);
  }
};

export const livelyEventListeners = {
  add<Schema extends {} = {}>(callback: LivelyCallback<Schema>) {
    listeners.add(callback);
  },
  remove<Schema extends {} = {}>(callback: LivelyCallback<Schema>) {
    listeners.delete(callback);
  }
};
