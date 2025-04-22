import supabase from "../config/supabaseClient";

export const fetchUserProfile = async () => {
  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError) {
    console.error("Session error:", sessionError);
    return null;
  }

  const userId = session?.user?.id;

  if (!userId) {
    console.warn("No authenticated user.");
    return null;
  }

  const { data: profile, error: profileError } = await supabase
    .from("accounts")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (profileError) {
    console.error("Error fetching profile:", profileError);
    return null;
  }

  return profile;
};
