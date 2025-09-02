import React from 'react'
import { assets } from '../assets/assets'
import './card.css'

const Card = () => {

    const acc = [
            { 
                id: 1,
                image: assets.MUSHA,
                name: "Musha",
                title: "MUSHA ESTATES",
                desc: "Limited Services ⏰🏡🫂 🏡Palaces for Kings👦😇 🏡Heaven for Angels👧😇 Secure an affordable home, Away from Home. ✨ Variety from walkable distances, drivable & available transport 📍 Mount Pleasant 📍 Groombridge 📍 Borrowdale 📍 Hatcliffe 📍 Avondale 📍 Emerald Hill Contact us 0778 292 321📲0716 063 531📲"
            },
            { 
                id: 2,
                image: assets.MONLY,
                name: "MenOnly",
                title: "MEN ONLY",
                desc: "Exclusive accommodation for male students with modern amenities and secure facilities."
            },
            {
                id: 3,
                image: '',
                name: '',
                title: "Boarding House listings",
                desc: "BOARDING HOUSE!! Along the chase just 8 minutes walk from campus. Book now and secure your spot 📣 Limited spaces available. ⏰Amenities: Solar backup power for uninterrupted studies 💡 Generator backup ⛽️ Gas stoves Unlimited WiFi connectivity Fridges 🍳🥤 Single beds 🛏️ Beautiful garden for relaxation 🌳 Study benches 📖 Clean and modern toilets 🚿 Borehole water 24/7 Security 10pm Curfew Room Options: Rooms for 4  ndoo dzasara👥 AFFORDABLE RENTALS $130 month Book your room today 📲 Distance is not a barrier. We accept eco cash mukuru or innbucks Schedule a viewing appointment now🫰 Contact the landlord on Whatsapp bookings only 0784641010 $100 SECURE YOUR PLACE_"
            },
            {
                id: 4,
                image: '',
                name: '',
                title: "Kaitlyns Catalogue",
                desc: " Follow this link to view our catalog on WhatsApp: https://wa.me/c/263787897354 🗣️YOUR ONE CALL AWAY AGENT !! 0780661150 📞 !! WE ARE AVAILABLE FOR BOOKINGS FROM 10 AM EVERYDAY 📌📌📌📌📌📌📌📌📌📌📌 NEW HOUSES ON CATALOGUE FROM $100 IN MT PLEASANT !!! 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 TO JOIN THE HOME-TEAM ACCOMMODATION GROUP CLICK THE LINK  BELOW 👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾👇🏾 https://chat.whatsapp.com/L800h190XKg4N32jXcF7dO ON CAMPUS ACCOMODATION IS VERY LIMITED BUT, WE HAVE  A HUGE  VARIETY OF ALTERNATIVE PLANS FOR YOU🫵🏾 50 PLUS+ ACCOMMODATION CHOICES FOR BOTH BOYS & GIRLS* ========================= •MT PLEASANT MIXED $85🇺🇸 •VAINONA FOR GIRLS $85🇺🇸 •VAINONA MIXED $80🇺🇸 •VAINONA FOR GIRLS $90🇺🇸 •OPPOSITE CAMPUS LADIES $140🇺🇸 •THE CHASE MIXED $120🇺🇸 •PENDENIS MIXED $100🇺🇸 •MT PLEASANT $100🇺🇸 •CHARTS-WORTH SIDE •HATCLIFF MIXED $55🇺🇸 •OPPOSITE CAMPUS ACCOMMODATION FOR BOTH BOYS AND GIRLS $150🇺🇸 TO $190🇺🇸"
            },
            {
                id: 5,
                image: '',
                name: '',
                title: 'Mount Pleasant Heights',
                desc: '*🏡Mt Pleasant Heights🏡📍 NO AGENT FEE📍 NO CURFEW 📍 VISITORS ALLOWED 160 including every day Transport Rooms of the 3 & 4 left . Only 8 students left. ✨Services✨ ✅ Transport 🚎 (part of Rent) ✅ Unlimited Wi-Fi available ✅ Borehole water ✅‼️‼️ Backup Solar ✅ Maid and Gardener available ✅Solar Geyser ✅Gas Stoves with no gas expenses ✅Microwave ✅Security ✅Lounge and TV room ✅Study area ✅Single beds ✅Separate Kitchen ✅Tubs and shower ✅Many toilets and baths , no congestion Contact 071 606 3531 📲 077 829 2321 📲'
            }
            
        ];

  return (
    <div className='flex flex-wrap gap-4 justify-center'>
        {acc.map((item)=>(
            <div key={item.id} className='card'>
                <img src={item.image} alt={item.name} className='card-image' />
                <h2 className='card-title'>{item.title}</h2>
                <p className='card-text'>{item.desc}</p>
            </div>
        ))}
    </div>
  );
}

export default Card