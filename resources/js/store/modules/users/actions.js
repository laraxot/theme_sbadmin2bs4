<<<<<<< HEAD
import * as mutations from '../../mutation-types'
import * as actions from '../../action-types'
import users from '../../../api/users'

export default {
  [ actions.SELECTED_USER ] (context, user) {
    context.commit(mutations.SELECTED_USER, user)
  },
  [ actions.FETCH_USERS ] (context) {
    return new Promise((resolve, reject) => {
      users.fetch().then(response => {
        context.commit(mutations.SET_USERS, response.data)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  [ actions.UPDATE_USER ] (context, user) {
    return new Promise((resolve, reject) => {
      users.update(user).then(response => {
        context.commit(mutations.USER, user)
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
import users from '../../../api/users'

export default {
  [ actions.SELECTED_USER ] (context, user) {
    context.commit(mutations.SELECTED_USER, user)
  },
  [ actions.FETCH_USERS ] (context) {
    return new Promise((resolve, reject) => {
      users.fetch().then(response => {
        context.commit(mutations.SET_USERS, response.data)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  [ actions.UPDATE_USER ] (context, user) {
    return new Promise((resolve, reject) => {
      users.update(user).then(response => {
        context.commit(mutations.USER, user)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
>>>>>>> 6de1edbfff1a6c6b67eaaada20d9102f6d002303
