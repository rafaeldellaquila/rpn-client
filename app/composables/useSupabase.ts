export const useSupabase = () => {
  const supabase = useSupabaseClient()

  if(!supabase) return console.error('Supabase client not found')

  const googleSignIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
    return { data, error }
  }

  return ref()
}
