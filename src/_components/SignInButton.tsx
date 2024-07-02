import { signInAction } from "../_libs/actions";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border px-10 py-4 font-medium rounded-lg transition-all active:scale-100 active:shadow active:translate-y-0 hover:scale-105 hover:shadow hover:-translate-y-1">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
          referrerPolicy="no-referrer"
        />
        <span>Đăng nhập với Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
