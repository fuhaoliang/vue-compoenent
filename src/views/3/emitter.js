function broadcast(componentName, eventName, ...params) {
  this.$children.forEach(child => {
    const name = child.$options.name;
    console.info("name---->", name);
    if (name === componentName) {
      child.$emit.call(child, eventName, ...params);
    } else {
      broadcast.call(child, eventName, ...params);
    }
  });
}

export default {
  methods: {
    dispatch(componentName, eventName, ...params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;

      while (parent && name !== componentName) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.name;
        }
      }

      if (parent) {
        parent.$emit(eventName, ...params);
      }
    },
    broadcast(componentName, eventName, ...params) {
      broadcast.call(this, componentName, eventName, ...params);
    }
  }
};
