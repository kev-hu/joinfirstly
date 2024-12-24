import { Linkedin, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-white">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-[#F3F4F6] p-6 rounded-lg border-2 border-black">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#faq" className="block text-gray-700 hover:text-primary font-medium">FAQ</a>
              <a href="https://firstly.pro/privacy-policy" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-primary font-medium">Privacy Policy</a>
              <a href="mailto:kevin@joinfirstly.com" className="block text-gray-700 hover:text-primary font-medium">Contact Us</a>
            </div>
          </div>
          <div className="bg-[#F3F4F6] p-6 rounded-lg border-2 border-black">
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/firstlypro"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-lg border-2 border-black hover:bg-yellow-300 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://linkedin.com/company/firstlypro"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-lg border-2 border-black hover:bg-yellow-300 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@firstlypro"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 rounded-lg border-2 border-black hover:bg-yellow-300 transition-colors"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-700 border-t-2 border-black pt-8">
          © 2024 Firstly. All rights reserved.
        </div>
      </div>
    </footer>
  );
};