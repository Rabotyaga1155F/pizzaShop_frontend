import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useAccessToken = () => {
  const router = useRouter();

  const redirectToLogin = () => {
    router.replace("/login");
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      redirectToLogin();
    }
  }, [router]);
};

export default useAccessToken;
