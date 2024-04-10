import { useStore } from 'vuex'

export default function(action){
  const store = useStore()
  // Return value must be truthy
  return useAsyncData(() => store.dispatch(action).then(data => data ?? true))
}