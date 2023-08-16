export function BackdropLoading() {
    return (
        <div>
            <div className="bg-zinc-900 bg-opacity-50 h-screen flex flex-col gap-2 items-center justify-center">
                <div className="h-20 w-20 border-8 border-zinc-200 border-t-emerald-500 rounded-full animate-spin" />
                <h3>Aguarde...</h3>
            </div>
        </div>
    )
}