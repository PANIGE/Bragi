namespace Bragi.Utils
{
    public static class StringUtils
    {
        public static string RandomString(int length, bool invariant = false, bool specialchars = false)
        {
            string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            if (specialchars)
                chars += "!@#$%^&*()_+{}[]:;\"'\\|,.<>?/";
            char[] stringChars = new char[length];
            Random random = new Random();

            for (int i = 0; i < stringChars.Length; i++)
                stringChars[i] = chars[random.Next(chars.Length)];

            return invariant ? new string(stringChars).ToLowerInvariant() : new string(stringChars);
        }
    }
}
