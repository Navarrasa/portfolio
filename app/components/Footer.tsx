export default function Footer() {
    return (
        <footer className="w-full h-[5rem] border-t border-border bottom-0 flex text-center justify-center bg-background text-foreground p-4">
            <p className="text-md p-4 flex items-center justify-center w-full">
                &copy; {new Date().getFullYear()} devBruno. All rights reserved.
            </p>
        </footer>
    );
}