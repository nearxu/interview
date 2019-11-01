const createObserve = () => ({
  hub: Object.create(null),
  emit(event, data) {
    (this.hub[event] || []).forEach(handler => handler(data));
  },
  on(event, handler) {
    if (!this.hub[event]) {
      this.hub[event] = [];
    }
    this.hub[event].push(handler);
  },
  off(event, handler) {
    const index = (this.hub[event] || []).findIndex(i => i === handler);
    if (index > -1) this.hub[event].splice(index, 1);
    if (this.hub[event].length === 0) delete this.hub[event];
  }
});

const handle = data => console.log(data);
const hub = createObserve();

hub.on("message", handle);

hub.on("click", handle);

console.log(hub);

hub.emit("click", "emit click");

hub.emit("message", "hello world");

hub.off("message", handle);

console.log(hub);
