import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink text-parchment/70 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-gothic text-gold text-xl mb-3">Diatom Art</h3>
            <p className="text-sm leading-relaxed">
              Publishing house dedicated to preserving and celebrating Riga&apos;s
              cultural heritage through fine art books.
            </p>
          </div>
          <div>
            <h3 className="font-display text-gold text-lg mb-3">Navigate</h3>
            <div className="flex flex-col gap-1 text-sm">
              <Link href="/about" className="hover:text-gold transition-colors">About Project</Link>
              <Link href="/chapters" className="hover:text-gold transition-colors">Chapters</Link>
              <Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link>
              <Link href="/timeline" className="hover:text-gold transition-colors">Timeline</Link>
            </div>
          </div>
          <div>
            <h3 className="font-display text-gold text-lg mb-3">Contact</h3>
            <p className="text-sm leading-relaxed">Riga, Latvia<br />info@diatomart.com</p>
          </div>
        </div>
        <div className="border-t border-parchment/10 mt-8 pt-6 text-center text-xs text-parchment/40">
          &copy; 2026 Diatom Art. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
