export function Footer() {
    return (
        <footer className="border-t border-muted/10 py-12 text-center">
            <p className="text-muted-foreground text-sm font-medium">
                &copy; {new Date().getFullYear()} Ali Rehman. Built with <span className="text-accent">Flutter</span>... just kidding, it&apos;s Next.js.
            </p>
        </footer>
    );
}
