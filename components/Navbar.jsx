
// // // import Link from 'next/link';
// // // import { House, Globe, Menu } from 'lucide-react';

// // // export default function Navbar() {
// // //   return (
// // //     // "absolute" puts it on top of the hero; "z-50" keeps it above the overlay
// // //     <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
// // //       <div className="container mx-auto px-4">
// // //         <div className="flex items-center justify-between h-16 md:h-20">

// // //           <Link href="/" className="flex items-center gap-2 group">
// // //             <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
// // //               <House className="w-6 h-6 text-white" />
// // //             </div>
// // //             <span className="font-serif font-bold text-xl text-white hidden sm:block">
// // //               PropertyDealer
// // //             </span>
// // //           </Link>

// // //           {/* Navigation Links with the exact Green pill for "Home" */}
// // //           <nav className="hidden md:flex items-center gap-1">
// // //             <Link href="/" className="px-4 py-2 rounded-lg text-sm font-medium bg-[#2d5a43] text-white">
// // //               Home
// // //             </Link>
// // //             <Link href="/properties" className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white transition-colors">
// // //               Properties
// // //             </Link>
// // //             <Link href="/about" className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white transition-colors">
// // //               About Us
// // //             </Link>
// // //             <Link href="/contact" className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white transition-colors">
// // //               Contact
// // //             </Link>
// // //           </nav>

// // //           <div className="flex items-center gap-2">
// // //             <button className="inline-flex items-center bg-white text-slate-900 text-sm font-medium h-9 rounded-md px-3 gap-2 shadow-sm">
// // //               <Globe className="w-4 h-4" />
// // //               <span>हिंदी</span>
// // //             </button>
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </header>
// // //   );
// // // }

// // "use client";

// // import { useState } from 'react';
// // import Link from 'next/link';
// // import { House, Globe, Menu, X, Search, Info, Phone } from 'lucide-react';

// // export default function Navbar() {
// //     const [isOpen, setIsOpen] = useState(false);

// //     return (
// //         <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
// //             <div className="container mx-auto px-4">
// //                 <div className="flex items-center justify-between h-16 md:h-20">

// //                     {/* Logo Section */}
// //                     <Link href="/" className="flex items-center gap-2 group">
// //                         <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
// //                             <House className="w-6 h-6 text-white" />
// //                         </div>
// //                         <span className="font-serif font-bold text-xl text-white hidden sm:block">
// //                             PropertyDealer
// //                         </span>
// //                     </Link>

// //                     {/* Desktop Navigation Links */}
// //                     <nav className="hidden md:flex items-center gap-1">
// //                         <Link href="/" className="px-4 py-2 rounded-lg text-sm font-medium bg-[#2d5a43] text-white">
// //                             Home
// //                         </Link>
// //                         <Link href="/properties" className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white transition-colors">
// //                             Properties
// //                         </Link>
// //                         <Link href="/about" className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white transition-colors">
// //                             About Us
// //                         </Link>
// //                         <Link href="/contact" className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white transition-colors">
// //                             Contact
// //                         </Link>
// //                     </nav>

// //                     <div className="flex items-center gap-2">
// //                         {/* Language Toggle - Desktop */}
// //                         <div className="hidden md:flex">
// //                             <button className="inline-flex items-center bg-white text-slate-900 text-sm font-medium h-9 rounded-md px-3 gap-2 shadow-sm">
// //                                 <Globe className="w-4 h-4" />
// //                                 <span>हिंदी</span>
// //                             </button>
// //                         </div>

// //                         {/* Mobile Menu Toggle Button */}
// //                         <button
// //                             onClick={() => setIsOpen(!isOpen)}
// //                             className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-white/20 text-white h-10 w-10 md:hidden"
// //                         >
// //                             {isOpen ? (
// //                                 <X className="w-6 h-6" />
// //                             ) : (
// //                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu w-5 h-5">
// //                                     <line x1="4" x2="20" y1="12" y2="12"></line>
// //                                     <line x1="4" x2="20" y1="6" y2="6"></line>
// //                                     <line x1="4" x2="20" y1="18" y2="18"></line>
// //                                 </svg>
// //                             )}
// //                         </button>
// //                     </div>
// //                 </div>

// //                 {/* Mobile Dropdown Menu */}
// //                 {isOpen && (

// //                     <div className="md:hidden relative flex  items-end"> 
// //                         <button className="flex  bg-white text-[#2d5a43] font-bold h-12 rounded-lg mt-2 gap-2 shadow-lg">
// //                         <Globe className="w-4 h-4" /> हिंदी
// //                     </button>
// //                         <div className="md:hidden absolute top-16 left-0 right-0 bg-[#2d5a43] border-t border-white/10 p-4 flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-2 duration-300 backdrop-blur-lg">

                          
// //                             {/* EXACT MATCH HOME LINK */}
// //                             <Link
// //                                 href="/"
// //                                 onClick={() => setIsOpen(false)}
// //                                 className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 bg-white/20 text-white shadow-sm"
// //                                 style={{ animationDelay: '0s' }}
// //                             >
// //                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-house w-5 h-5">
// //                                     <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
// //                                     <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
// //                                 </svg>
// //                                 Home
// //                             </Link>

// //                             <Link
// //                                 href="/properties"
// //                                 onClick={() => setIsOpen(false)}
// //                                 className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200"
// //                             >
// //                                 <Search className="w-5 h-5" />
// //                                 Properties
// //                             </Link>

// //                             <Link
// //                                 href="/about"
// //                                 onClick={() => setIsOpen(false)}
// //                                 className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200"
// //                             >
// //                                 <Info className="w-5 h-5" />
// //                                 About Us
// //                             </Link>

// //                             <Link
// //                                 href="/contact"
// //                                 onClick={() => setIsOpen(false)}
// //                                 className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-all duration-200"
// //                             >
// //                                 <Phone className="w-5 h-5" />
// //                                 Contact
// //                             </Link>

// //                         </div>
// //                     </div>
// //                 )}
// //             </div>
// //         </header>
// //     );
// // }

// "use client";

// import { useState } from 'react';
// import Link from 'next/link';
// import { House, Globe, Menu, X, Search, Info, Phone } from 'lucide-react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16 md:h-20">
          
//           {/* Logo Section */}
//           <Link href="/" className="flex items-center gap-2 group">
//             <div className="w-10 h-10 rounded-lg bg-[#2d5a43] flex items-center justify-center border border-white/20">
//               <House className="w-6 h-6 text-white" />
//             </div>
//             <span className="font-serif font-bold text-xl text-white hidden sm:block">
//               PropertyDealer
//             </span>
//           </Link>

//           {/* Desktop Navigation Links */}
//           <nav className="hidden md:flex items-center gap-1">
//             <Link href="/" className="px-4 py-2 rounded-lg text-sm font-medium bg-[#2d5a43] text-white">
//               होम
//             </Link>
//             <Link href="/properties" className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white transition-colors">
//               संपत्ति
//             </Link>
//             <Link href="/about" className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white transition-colors">
//               हमारे बारे में
//             </Link>
//             <Link href="/contact" className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white transition-colors">
//               संपर्क
//             </Link>
//           </nav>

//           {/* Right Side Buttons (Visible on Mobile & Desktop) */}
//           <div className="flex items-center gap-3">
            
//             {/* Language Toggle - NOW VISIBLE ON ALL SCREEN SIZES */}
//             <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium bg-white text-slate-900 h-9 rounded-xl px-3 gap-2 shadow-sm transition-all active:scale-95">
//               <Globe className="w-4 h-4 text-[#2d5a43]" />
//               <span className="hidden sm:inline">English</span>
//               <span className="sm:inline font-bold">हि</span> {/* Display 'हि' on small screens */}
//             </button>

//             {/* Mobile Menu Toggle Button */}
//             <button 
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center rounded-lg text-white h-10 w-10 md:hidden hover:bg-white/10 transition-all duration-300"
//               aria-label="Toggle Menu"
//             >
//               {isOpen ? (
//                 <X className="w-7 h-7" />
//               ) : (
//                 <Menu className="w-7 h-7" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         {isOpen && (
//           <div className="md:hidden absolute top-16 left-0 right-0 bg-[#2d5a43]/95 border-t border-white/10 p-4 flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-2 duration-300 backdrop-blur-lg">
            
//             <Link 
//               href="/" 
//               onClick={() => setIsOpen(false)}
//               className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 bg-white/10 text-white"
//             >
//               <House className="w-5 h-5" />
//               होम
//             </Link>

//             <Link 
//               href="/properties" 
//               onClick={() => setIsOpen(false)}
//               className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:bg-white/10"
//             >
//               <Search className="w-5 h-5" />
//               संपत्ति
//             </Link>

//             <Link 
//               href="/about" 
//               onClick={() => setIsOpen(false)}
//               className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:bg-white/10"
//             >
//               <Info className="w-5 h-5" />
//               हमारे बारे में
//             </Link>

//             <Link 
//               href="/contact" 
//               onClick={() => setIsOpen(false)}
//               className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:bg-white/10"
//             >
//               <Phone className="w-5 h-5" />
//               संपर्क
//             </Link>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

"use client";

import { useState } from 'react';
import Link from 'next/link';
import { House, Globe, Menu, X, Search, Info, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-[#2d5a43] flex items-center justify-center border border-white/20">
              <House className="w-6 h-6 text-white" />
            </div>
            <span className="font-serif font-bold text-xl text-white hidden sm:block">
              PropertyDealer
            </span>
          </Link>

          {/* Desktop Navigation - English Only */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 rounded-lg text-sm font-medium bg-[#2d5a43] text-white">
              Home
            </Link>
            <Link href="/properties" className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white transition-colors">
              Properties
            </Link>
            <Link href="/about" className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            
            {/* Language Toggle - Visible on Mobile (Side of Menu Button) */}
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium bg-white text-slate-900 h-9 rounded-xl px-3 gap-2 shadow-sm transition-all active:scale-95">
              <Globe className="w-4 h-4 text-[#2d5a43]" />
              <span className="font-bold">हि</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg text-white h-10 w-10 md:hidden hover:bg-white/10 transition-all duration-300"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu - English Only */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#2d5a43]/95 border-t border-white/10 p-4 flex flex-col gap-2 shadow-2xl animate-in slide-in-from-top-2 duration-300 backdrop-blur-lg">
            
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 bg-white/10 text-white"
            >
              <House className="w-5 h-5" />
              Home
            </Link>

            <Link 
              href="/properties" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:bg-white/10"
            >
              <Search className="w-5 h-5" />
              Properties
            </Link>

            <Link 
              href="/about" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:bg-white/10"
            >
              <Info className="w-5 h-5" />
              About Us
            </Link>

            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/80 hover:bg-white/10"
            >
              <Phone className="w-5 h-5" />
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}