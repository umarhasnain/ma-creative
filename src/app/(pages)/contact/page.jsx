// 'use client';

// import { useState } from 'react';
// import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Dribbble, Facebook, Instagram } from 'lucide-react';

// export default function ContactPage() {
//     const [form, setForm] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert(`Thank you, ${form.name}. Your message has been sent successfully!`);
//         setForm({ name: '', email: '', message: '' });
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 py-32">
//             <div className="max-w-7xl mx-auto px-6">
//                 {/* Heading */}
//                 <div className="text-center mb-16">
//                     <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
//                         Reach Out <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Professionally</span>
//                     </h1>
//                     <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
//                         I’m always open to exciting projects or collaborations. Fill the form below and I’ll get back to you as soon as possible!
//                     </p>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-12">
//                     {/* Contact Info */}
//                     <div className="space-y-10">
//                         <div className="flex items-start gap-4">
//                             <Mail className="w-7 h-7 text-orange-500 mt-1" />
//                             <div>
//                                 <h3 className="font-semibold text-gray-900 text-lg">Email</h3>
//                                 <p className="text-gray-600">eclipselab08@gmail.com</p>
//                             </div>
//                         </div>

//                         <div className="flex items-start gap-4">
//                             <Phone className="w-7 h-7 text-orange-500 mt-1" />
//                             <div>
//                                 <h3 className="font-semibold text-gray-900 text-lg">Phone</h3>
//                                 <p className="text-gray-600">+92 370 8611905</p>
//                             </div>
//                         </div>

//                         <div className="flex items-start gap-4">
//                             <MapPin className="w-7 h-7 text-orange-500 mt-1" />
//                             <div>
//                                 <h3 className="font-semibold text-gray-900 text-lg">Location</h3>
//                                 <p className="text-gray-600">Karachi, Pakistan</p>
//                             </div>
//                         </div>

//                         {/* Social Proof */}
//                         <div className="flex items-center gap-6 mt-6">
//                             <a href="https://www.linkedin.com/in/muhammadahsan089" className="text-gray-600 hover:text-orange-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
//                             <a href="https://www.instagram.com/muhammadahsan089" className="text-gray-600 hover:text-orange-500 transition-colors"><Instagram className="w-5 h-5" /></a>
//                             <a href="https://www.facebook.com/muhammadahsan089" className="text-gray-600 hover:text-orange-500 transition-colors"><Facebook className="w-5 h-5" /></a>
//                         </div>
//                     </div>

//                     {/* Contact Form */}
//                     <form
//                         onSubmit={handleSubmit}
//                         className="bg-white/80 backdrop-blur-md shadow-lg rounded-3xl p-10 space-y-6 border border-gray-200"
//                     >
//                         {/* Name Field */}
//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 name="name"
//                                 value={form.name}
//                                 onChange={handleChange}
//                                 required
//                                 className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 bg-white/60 backdrop-blur-sm transition"
//                             />
//                             <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-600 peer-focus:text-sm">
//                                 Name
//                             </label>
//                         </div>

//                         {/* Email Field */}
//                         <div className="relative">
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={form.email}
//                                 onChange={handleChange}
//                                 required
//                                 className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 bg-white/60 backdrop-blur-sm transition"
//                             />
//                             <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-600 peer-focus:text-sm">
//                                 Email
//                             </label>
//                         </div>

//                         {/* Message Field */}
//                         <div className="relative">
//                             <textarea
//                                 name="message"
//                                 value={form.message}
//                                 onChange={handleChange}
//                                 rows={5}
//                                 required
//                                 className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 bg-white/60 backdrop-blur-sm transition resize-none"
//                             ></textarea>
//                             <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-gray-600 peer-focus:text-sm">
//                                 Message
//                             </label>
//                         </div>

//                         <button
//                             type="submit"
//                             className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all"
//                         >
//                             Send Message <Send className="w-5 h-5" />
//                         </button>
//                     </form>
//                 </div>


//                 {/* Trust Badge */}
//                 <div className="mt-16 text-center">
//                     <p className="text-gray-500">
//                         Trusted by <span className="font-semibold text-gray-900">500+ clients</span> worldwide
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }


// 'use client';

// import { useState } from 'react';
// import { Mail, Phone, MapPin, Send, Linkedin, Facebook, Instagram } from 'lucide-react';

// export default function ContactPage() {
//     return (
//         <div className="min-h-screen bg-gray-50 py-32">
//             <div className="max-w-7xl mx-auto px-6">
                
//                 <div className="text-center mb-16">
//                     <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
//                         Reach Out <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Professionally</span>
//                     </h1>
//                     <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
//                         I’m always open to exciting projects or collaborations. Fill the form below and I’ll get back to you as soon as possible!
//                     </p>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-12">

//                     <div className="space-y-10">
//                         <div className="flex items-start gap-4">
//                             <Mail className="w-7 h-7 text-orange-500 mt-1" />
//                             <div>
//                                 <h3 className="font-semibold text-gray-900 text-lg">Email</h3>
//                                 <p className="text-gray-600">eclipselab08@gmail.com</p>
//                             </div>
//                         </div>

//                         <div className="flex items-start gap-4">
//                             <Phone className="w-7 h-7 text-orange-500 mt-1" />
//                             <div>
//                                 <h3 className="font-semibold text-gray-900 text-lg">Phone</h3>
//                                 <p className="text-gray-600">+92 370 8611905</p>
//                             </div>
//                         </div>

//                         <div className="flex items-start gap-4">
//                             <MapPin className="w-7 h-7 text-orange-500 mt-1" />
//                             <div>
//                                 <h3 className="font-semibold text-gray-900 text-lg">Location</h3>
//                                 <p className="text-gray-600">Karachi, Pakistan</p>
//                             </div>
//                         </div>

//                         <div className="flex items-center gap-6 mt-6">
//                             <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
//                             <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors"><Instagram className="w-5 h-5" /></a>
//                             <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors"><Facebook className="w-5 h-5" /></a>
//                         </div>
//                     </div>

//                     {/* 🚀 UPDATED WORKING FORM WITH FORMSUBMIT */}
//                     <form
//                         action="https://formsubmit.co/eclipselab08@gmail.com"
//                         method="POST"
//                         className="bg-white/80 backdrop-blur-md shadow-lg rounded-3xl p-10 space-y-6 border border-gray-200"
//                     >

//                         {/* HIDDEN FIELDS */}
//                         <input type="hidden" name="_captcha" value="false"/>
//                         <input type="hidden" name="_template" value="table"/>
//                         <input type="hidden" name="_next" value="https://https://ma-creative.vercel.app/contact?success=true" />

//                         {/* Name */}
//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 name="name"
//                                 required
//                                 className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 bg-white/60 backdrop-blur-sm transition"
//                             />
//                             <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-focus:top-2 peer-focus:text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base">
//                                 Name
//                             </label>
//                         </div>

//                         {/* Email */}
//                         <div className="relative">
//                             <input
//                                 type="email"
//                                 name="email"
//                                 required
//                                 className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 bg-white/60 backdrop-blur-sm transition"
//                             />
//                             <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-focus:top-2 peer-focus:text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base">
//                                 Email
//                             </label>
//                         </div>

//                         {/* Message */}
//                         <div className="relative">
//                             <textarea
//                                 name="message"
//                                 rows={5}
//                                 required
//                                 className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 bg-white/60 backdrop-blur-sm transition resize-none"
//                             ></textarea>
//                             <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-focus:top-2 peer-focus:text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base">
//                                 Message
//                             </label>
//                         </div>

//                         <button
//                             type="submit"
//                             className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all"
//                         >
//                             Send Message <Send className="w-5 h-5" />
//                         </button>

//                         {
//                             typeof window !== "undefined" &&
//                             new URLSearchParams(window.location.search).get("success") === "true" && (
//                                 <p className="text-green-600 text-center font-medium mt-3">
//                                     ✔ Message Sent Successfully!
//                                 </p>
//                             )
//                         }

//                     </form>
//                 </div>

//                 <div className="mt-16 text-center">
//                     <p className="text-gray-500">
//                         Trusted by <span className="font-semibold text-gray-900">500+ clients</span> worldwide
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }



//******************************************* */

'use client';

import { useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Facebook, Instagram } from 'lucide-react';

export default function ContactPage() {

    // fade-in animation
    useEffect(() => {
        document.body.classList.add("fade-loaded");
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-32 fade-start">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                        Reach Out <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Professionally</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        I’m always open to exciting projects or collaborations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    
                    {/* INFO SECTION */}
                    <div className="space-y-10">
                        <div className="flex items-start gap-4">
                            <Mail className="w-7 h-7 text-orange-500 mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-900 text-lg">Email</h3>
                                <p className="text-gray-600">eclipselab08@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="w-7 h-7 text-orange-500 mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-900 text-lg">Phone</h3>
                                <p className="text-gray-600">+92 370 8611905</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin className="w-7 h-7 text-orange-500 mt-1" />
                            <div>
                                <h3 className="font-semibold text-gray-900 text-lg">Location</h3>
                                <p className="text-gray-600">Karachi, Pakistan</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mt-6">
                            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors"><Facebook className="w-5 h-5" /></a>
                        </div>

                        {/* DIRECT WHATSAPP CTA */}
                        <a 
                            href="https://wa.me/923708611905"
                            className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
                        >
                            💬 Contact on WhatsApp
                        </a>
                    </div>

                    {/* FORM WITH FORMSUBMIT */}
                    <form
                        action="https://formsubmit.co/eclipselab08@gmail.com"
                        method="POST"
                        className="bg-white/80 backdrop-blur-md shadow-lg rounded-3xl p-10 space-y-6 border border-gray-200"
                    >

                        {/* REQUIRED HIDDEN VALUES */}
                        <input type="hidden" name="_captcha" value="false"/>
                        <input type="hidden" name="_template" value="box"/>
                        <input type="hidden" name="_next" value="https://https://ma-creative.vercel.app/contact?success=true" />

                        {/* Auto reply */}
                        <input type="hidden" name="_autoresponse" value="Thank you for contacting Ahsan! I will get back to you shortly." />

                        {/* SPAM BOT HONEYPOT  */}
                        <input type="text" name="_honey" className="hidden" />

                        {/* NAME */}
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                required
                                className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 bg-white/60 transition"
                            />
                            <label className="absolute left-4 top-2 text-gray-500 text-sm peer-focus:top-2 peer-focus:text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base">
                                Name
                            </label>
                        </div>

                        {/* EMAIL */}
                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                required
                                className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 bg-white/60 transition"
                            />
                            <label className="absolute left-4 top-2 text-gray-500 text-sm peer-focus:top-2 peer-focus:text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base">
                                Email
                            </label>
                        </div>

                        {/* MESSAGE */}
                        <div className="relative">
                            <textarea
                                name="message"
                                rows={5}
                                required
                                className="peer w-full px-4 pt-5 pb-2 rounded-xl border border-gray-300 focus:border-orange-500 focus:ring-2 bg-white/60 transition resize-none"
                            ></textarea>
                            <label className="absolute left-4 top-2 text-gray-500 text-sm peer-focus:top-2 peer-focus:text-sm peer-placeholder-shown:top-5 peer-placeholder-shown:text-base">
                                Message
                            </label>
                        </div>

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl transition-all"
                        >
                            Send Message <Send className="w-5 h-5" />
                        </button>

                        {/* SUCCESS MESSAGE */}
                        {
                            typeof window !== "undefined" &&
                            new URLSearchParams(window.location.search).get("success") === "true" && (
                                <p className="text-green-600 text-center font-medium mt-3 animate-bounce">
                                    ✔ Message Sent Successfully!
                                </p>
                            )
                        }
                    </form>
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500">
                        Trusted by <span className="font-semibold text-gray-900">500+ clients</span> worldwide
                    </p>
                </div>
            </div>
        </div>
    );
}
