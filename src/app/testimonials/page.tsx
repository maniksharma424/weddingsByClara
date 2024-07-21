import React from 'react'
import Image from "next/image";
import image1 from "../../../public/wedding_demo_image/wedding_image.jpg";
import "../../../public/testimonials_styles/index.css"



const page = () => {

  const testimonial_data= [
    {
      "testimonial_text": `Lisa is: low key, so efficient, so knowledgeable and so incredibly respected in her industry that EVERY OTHER VENDOR LOVES WORKING WITH HER. Which means they’ll all love and do a great job working on your wedding, too.
      I found Lisa b/c we had settled on Darlington House as a venue, so I called them to ask for their favorite planners / recommendations, and Lisa’s name was one of the few they gave me. I ended up interviewing 3 wedding planners in San Diego, and loved them all and (before I met them) wondered how I would know which to choose. One of my best friends (who is also a wedding planner) told me, when I asked her the best way to pick a planner, she said: “You have to go with your gut. 
      Who is the person you want handling &$#^ when it goes wrong that day? Because something always will.
      Who is the person you feel the most comfortable with and who has your back?” - and I met with great 3 planners, and Lisa was the resounding YES for me. There was no contest, even though I really did LOVE the other girls I met with. Lisa for sure flies under the radar - so you can’t gage her talent or how amazing she’ll be for your wedding by her Insta page (which is beautiful but not updated like, 19x a day) because we all know that the Insta-facade is a sham.
      I chose the “Month-Of” package because I’m a nerd and Interior Designer so I thought, how hard can this be? It’s cool, I’ll “plan” it myself and let her handle the month-of.
      Except I found myself CONSTANTLY having to ask her advice, because no matter how many color palettes or pretty inspiration boards you can put together, it really has nothing to do with your day actually coming to fruition and going off without a hitch the way you want it to. You just don’t know what you don’t know, and I now have such a greater respect for the insane amount of tacit knowledge and finesse you have to have to be an event coordinator.
      I met with Lisa almost a year ago and have been in contact with her ever since we hired her for our 4.4.20 wedding. Which - we just had to reschedule thanks to Coronavirus. She could not have been more supportive, empathetic, flexible or wonderful in working with us to find a new date. She is indispensable to us - if she hadn’t been available on our rescheduled date, we would’ve picked another time.
      We were also so close to going thru with the wedding that I was already into the thick of my “month-of” with her, and she’s so low maintenance that (my Type A / controlling self) would go to follow-up on things and the vendors would be like, “oh you know what, LISA actually worked that out with us! We love her so we made an exception for (whatever you wanted) - you’re good!” - not that that happens in every situation but goes to show she has SUCH great relationships with all the other (amazing) wedding vendors (all the ones you’ll want to work with) with that everyone is delighted when you tell them she’s your planner, because she is so well-respected and beloved in that community.`,
      "testimonial_by": `Stephanie + Chris`
    },
    {
      "testimonial_text": `I just don’t know where to start with Lisa - there are too many great things to say! My husband and I were planning a wedding in San Diego from across the country, which was completely overwhelming. Before we even hired her, she proved to be such an amazing person and a great help. After hiring her, my wedding planning process was almost instantly more enjoyable and far less stressful. She had amazing recommendations and connections that helped us save money in the long run, and she knew all the ins and outs of our venue, The Darlington House! Like most grooms, my husband’s interest in wedding planning was zero, so he loved Lisa because she provided me with an outlet to gush about details and vent whenever I needed. 
      For me, although my husband is my rock in life, Lisa was my rock when it came to the wedding. She took care of all the nitty gritty things that I didn’t know a thing about, but let me be as involved as I wanted to be. She really understood what our vision was for the wedding, what our priorities were, and made sure to marry both all while honoring our budget. Anytime I began to feel stressed or overwhelmed, she was there to talk me off a ledge and made the decision-making process so much more bearable. 
      The day of our wedding was flawless - if anything went wrong, my husband and I had no clue about it. She made sure that all Steve and I had to worry about was enjoying our day, enjoying our guests and making amazing memories, which we absolutely did`,
      "testimonial_by": `Jenica + Marty`
    },
    {
      "testimonial_text": `My review for Lisa is soooo long overdue, but I still wanted to let everyone know how WONDERFUL she is!
      Lisa was the second coordinator I interviewed and after meeting with her I knew I wanted to go with her based on her experience and ease she carried. My husband and I got married at The Darlington House in La Jolla and she was one of a few that were highly recommended, and it was the best decision ever!
      I am an extremely organized and scheduled person, so when I met Lisa I was instantly at ease. She was so friendly and so organized that I knew our wedding was in good hands. Lisa was also there for me with answers to any of my questions and a couple weeks before the big day when we met, she had everything laid our perfectly. She really helped bring my visions to life with her attention to detail. She knew exactly the aesthetic and vibe I was going for and really helped tie up any loose ends.
      The day of our wedding could not have gone more perfect! There wasn’t a single thing I would have changed and just so grateful for Lisa and her team to make the whole day run so smoothly. Lisa it was truly a blessing to have worked with you, thank you!!!`,
      "testimonial_by": `Michelle C`
    }
  ]
  return (
    <div className='pt-10'>
      <div className="flex justify-between w-full h-[700px] overflow-hidden">
      <Image
              src={image1}
              alt="wedding image"
              className="w-full h-full"
            />
      </div>
      {testimonial_data.map((value,index)=>(
        <div className="py-10 font-sans text-gray-800" key={index}>
        <div className="border_line" >
        <blockquote className="text-slate-500 leading-relaxed pl-8 font-sans">
                <q>{value.testimonial_text}</q>
                <br />
        <span className="float-end text-slate-400 font-sans">— {value.testimonial_by}</span>
        </blockquote>
        </div>
        </div>
      ))}
      
      <div className="my-5 border-l-2 border-gray-600 px-4">
        Powered by
        <span className=" font-sans ml-2 text-xl font-light">ELEVE BRANDS</span>
      </div>

    </div>
  )
}

export default page