import { goto } from "$app/navigation";





const useFreeEstimate = (callBack: any, s: any) => {
    const session = {}

    const href = callBack
        ? callBack.replace(/\//gi, "/")
        : s ? `${s === "/" ? "/" : s.slice(1)}` : "/";
    const handleFreeEst = () => {
        // ?.email
        if (!session) {
            return goto(
                `/login?callbackUrl=${href}&message=login to claim your free estimate`
            );
        }
        // if (!session?.isVerified) {
        //     return router.push("/verify-email?error=verify your email first");
        // }
        if (window) {
            return window?.my_modal_3.showModal();
        }
        return;
    };
    return { handleFreeEst }
}

export default useFreeEstimate