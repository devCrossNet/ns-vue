const { VUE_APP_PLATFORM } = process.env;

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    getDate() {
      if (VUE_APP_PLATFORM === "web") {
        return new Date();
      } /* eslint-disable */ else if (VUE_APP_PLATFORM === "ios") {
        return NSDate.date();
      }
    }
  }
};
