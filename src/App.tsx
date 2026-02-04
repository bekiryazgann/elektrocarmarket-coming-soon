import Logo from './components/Logo';
import Header from './components/Header';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6 md:p-12 overflow-x-hidden">
      <div className="w-full max-w-5xl flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <Logo />
        <Header />
        <ContactSection />
        
        <footer className="mt-20 text-muted-foreground text-sm">
          © {new Date().getFullYear()} Elektrocarmarket. Tüm hakları saklıdır.
        </footer>
      </div>
    </main>
  );
}