<<<<<<< HEAD
import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import snackbar from './modules/snackbar'
import users from './modules/users'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    snackbar,
    users
  },
  strict: debug
})
=======
import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import snackbar from './modules/snackbar'
import users from './modules/users'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    snackbar,
    users
  },
  strict: debug
})
>>>>>>> 7acc7b40bfadbdb97addbca0d76889ee2eeeba7f
