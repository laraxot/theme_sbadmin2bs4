<<<<<<< HEAD
import * as mutations from '../../mutation-types'
import * as actions from '../../action-types'
import auth from '../../../api/auth'

export default {
  [ actions.LOGIN ] (context, credentials) {
    return new Promise((resolve, reject) => {
      auth.login(credentials).then(response => {
        context.commit(mutations.LOGGED, true)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  [ actions.LOGOUT ] (context) {
    return new Promise((resolve, reject) => {
      auth.logout().then(response => {
        context.commit(mutations.LOGGED, false)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  [ actions.REGISTER ] (context, user) {
    return new Promise((resolve, reject) => {
      auth.register(user).then(response => {
        context.commit(mutations.LOGGED, false)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  [ actions.REMEMBER_PASSWORD ] (context, email) {
    return new Promise((resolve, reject) => {
      auth.remember(email).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  [ actions.RESET_PASSWORD ] (context, user) {
    return new Promise((resolve, reject) => {
      auth.reset(user).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
=======
import * as mutations from '../../mutation-types'
import * as actions from '../../action-types'
import auth from '../../../api/auth'

export default {
  [ actions.LOGIN ] (context, credentials) {
    return new Promise((resolve, reject) => {
      auth.login(credentials).then(response => {
        context.commit(mutations.LOGGED, true)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  [ actions.LOGOUT ] (context) {
    return new Promise((resolve, reject) => {
      auth.logout().then(response => {
        context.commit(mutations.LOGGED, false)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  [ actions.REGISTER ] (context, user) {
    return new Promise((resolve, reject) => {
      auth.register(user).then(response => {
        context.commit(mutations.LOGGED, false)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  [ actions.REMEMBER_PASSWORD ] (context, email) {
    return new Promise((resolve, reject) => {
      auth.remember(email).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  [ actions.RESET_PASSWORD ] (context, user) {
    return new Promise((resolve, reject) => {
      auth.reset(user).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
>>>>>>> 6de1edbfff1a6c6b67eaaada20d9102f6d002303
