<<<<<<< HEAD
export default {
  data() {
    return {
      fields: {},
      errors: {},
      success: false,
      loaded: true,
      action: '',
    }
  },

  methods: {

    submit() {
      if (this.loaded) {
        this.loaded = false;
        this.success = false;
        this.errors = {};
        axios.post(this.action, this.fields).then(response => {
          this.fields = {}; //Clear input fields.
          this.loaded = true;
          this.success = true;
        }).catch(error => {
          this.loaded = true;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
        });
      }
    },

  },
=======
export default {
  data() {
    return {
      fields: {},
      errors: {},
      success: false,
      loaded: true,
      action: '',
    }
  },

  methods: {

    submit() {
      if (this.loaded) {
        this.loaded = false;
        this.success = false;
        this.errors = {};
        axios.post(this.action, this.fields).then(response => {
          this.fields = {}; //Clear input fields.
          this.loaded = true;
          this.success = true;
        }).catch(error => {
          this.loaded = true;
          if (error.response.status === 422) {
            this.errors = error.response.data.errors || {};
          }
        });
      }
    },

  },
>>>>>>> 612f709d5ca91aa61f7acaba002247d278c20ee9
}