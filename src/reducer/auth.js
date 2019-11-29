const state1 = false
export default function auth(state = state1,action) {
  console.log(action)
    switch (action.type) {
      case 'login':
        return true
      case 'exit':
        return false
      default:
        return false
    }
  }
  