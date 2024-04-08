import { HiArrowLongRight } from "react-icons/hi2";
// import { HiArrowLongLeft } from "react-icons/hi2";
import { SlArrowRight } from "react-icons/sl";

export default function About() {
  return (
    <div id="about" className="bg-[#FF4500] relative">
        <div className="container mx-auto pt-24 px-3">
            <p className="text-center text-sm pb-4">Lord Vishnus Avatara</p>
            <h1 className="lg:text-3xl text-white font-poppins text-center">Lets Know <br /> about <span>10 Avatara of Vishnu </span>
            </h1>
            <section className="lg:flex py-[10%] justify-center gap-x-[10%]">
                <div className="text-white lg:w-1/4">
                    <h2 className="lg:text-3xl">The First Avatar: Matsya  </h2>
                    <p className="leading-7 py-6">Matsya is said to be the avatar that rescued the first man, as well as other creatures of the earth, from a great flood. Matsya is sometimes depicted as a great fish or as a human torso connected to the tail of a fish. Matsya is said to have forewarned man about the coming flood and ordered him to preserve all the grains and living creatures in a boat. This story is similar to many deluge myths found in other cultures.</p>
                    <a href="#" className="text-black">
                      Read More
                    </a>
                </div>
                <div className="relative lg:h-[25rem] h-[230px] lg:w-[25rem] w-[230px] lg:mx-0 mx-auto">
                  {/* <div className="linear-gradient absolute h-full w-full "></div> */}
                    <img src="/Matsya.jpg" alt="Matsya Avatar"
                    className="absolute w-full h-full object-contain lg:-top-20 lg:-left-8"
                    />
                    <div className="absolute -right-8 top-0 flex vertical-text ">
                    {/* p-className="text-sm rotate-text" */}
                      <p > First Incarnation </p>
                      <SlArrowRight className="text-white text-2xl rotate-45"/>
                    </div>
                  
                </div>
            </section>

            <div className="flex lg:flex-row flex-col-reverse pt-[10%] pb-[5%] justify-center gap-x-[10%]">
              <div className="relative lg:h-[25rem] h-[250px] lg:w-[25rem] w-[250px] lg:mx-0 mx-auto lg:py-0 justify-center items-center">
                {/* <div className="linear-gradient absolute h-full w-full "></div> */}
                  <img src="Kurma.webp" alt="" className="absolute lg:w-[120%] w-full h-full object-contain lg:-top-20 lg:-left-0" />
                  <div className="absolute -left-8 flex vertical-text">
                    {/* p-className="text-sm rotate-text" */}
                    <p >Second Incarnation</p>
                    <SlArrowRight className="text-white text-2xl rotate-135"/>
                  </div>
              </div>
              <div className="text-white lg:w-1/4">
                <h2 className="lg:text-3xl">Incarnation of Lord Vishnu as a turtle.</h2>
                <p className="leading-7 py-6">Kurma (or Koorma) is the tortoise incarnation that relates to the myth of churning the ocean to obtain treasures dissolved in the ocean of milk. In this myth, Vishnu took the form of a tortoise upon which to support the churning stick on his back.
                The Kurma avatar of Vishnu is usually seen in a mixed human-animal form.</p>
                <a href="#" className="text-black">Read More</a>
              </div>
            </div>
            <div className="flex justify-center lg:pt-0 py[10%]">
              <button className="border border-solid border-black flex items-center justify-center gap-x-2 h-14 bg-transparent px-16 text-lg hoverButton">SHOW MORE <HiArrowLongRight />
              </button>
            </div>

            <section className="lg:flex py-[10%] justify-center gap-x-[10%]">
                <div className="text-white lg:w-1/4">
                    <h2 className="lg:text-3xl">Varaha (Boar) Avatar</h2>
                    <p className="leading-7 py-6">Lord Vishnu arrived as Varaha to rescue the earth (personified as the goddess Bhudevi) from the demon Hiranyaksha, who had taken her and hidden her in the primordial waters.
                    After killing the demon, Varaha lifted the Earth out of the water using his tusks, bringing Bhudevi back to her rightful place in the cosmos.</p>
                    <a href="#" className="text-black">
                      Read More
                    </a>
                </div>
                <div className="relative lg:h-[25rem] h-[230px] lg:w-[25rem] w-[230px] lg:mx-0 mx-auto">
                  {/* <div className="linear-gradient absolute h-full w-full "></div> */}
                    <img src="/varaha.jpg" alt="Narasimha Avatar"
                    className="absolute w-full h-full object-contain lg:-top-20 lg:-left-8"
                    />
                    <div className="absolute -right-8 top-0 flex vertical-text ">
                    {/* p-className="text-sm rotate-text" */}
                      <p > Third incarnation </p>
                      <SlArrowRight className="text-white text-2xl rotate-45"/>
                    </div>
                  
                </div>
            </section>

            <div className="flex lg:flex-row flex-col-reverse pt-[10%] pb-[5%] justify-center gap-x-[10%]">
              <div className="relative lg:h-[25rem] h-[250px] lg:w-[25rem] w-[250px] lg:mx-0 mx-auto lg:py-0 justify-center items-center">
                {/* <div className="linear-gradient absolute h-full w-full "></div> */}
                  <img src="Narasimha.jpg" alt="" className="absolute lg:w-[120%] w-full h-full object-contain lg:-top-20 lg:-left-0" />
                  <div className="absolute -left-8 flex vertical-text">
                    {/* p-className="text-sm rotate-text" */}
                    <p >Fouth Incarnation</p>
                    <SlArrowRight className="text-white text-2xl rotate-135"/>
                  </div>
              </div>
              <div className="text-white lg:w-1/4">
                <h2 className="lg:text-3xl">Narasimha (Half-man/half-lion) Avatar</h2>
                <p className="leading-7 py-6">Hiranyakashipu, the rakshasa (devil), was awarded a great boon from Lord Brahma, making it impossible for him to be killed by man or animal, indoors or outdoors, during the day or night, on Earth or among the stars, with a weapon that was either alive or inanimate.Lord Vishnu took on a human form but a lion's head and talons during his incarnation. The rakshasa was lying on his thighs at dusk on the threshold of his courtyard when he was disemboweled with his claws.</p>
                <a href="#" className="text-black">Read More</a>
              </div>

            </div>
            <section className="lg:flex py-[10%] justify-center gap-x-[10%]">
                <div className="text-white lg:w-1/4">
                    <h2 className="lg:text-3xl">Vamana (Dwarf) Avatar</h2>
                    <p className="leading-7 py-6">Vamana Avatar Vishnu came down from heaven to restore Indra's rule over the heavens. Vamana went against the advice of his mentor Sukracharya and got three paces of land from King Mahabali.Vamana then showed himself and grew to monstrous proportions, allowing him to walk effortlessly over all three dimensions. With the first, he descended to Earth, and with the second, he descended to the Underworld. Due to his inability to keep his word, King Mahabali sacrificed his own head in order to appease the gods.Vamana then put his foot down, granting the monarch eternal life in exchange for his modesty.</p>
                    <a href="#" className="text-black">
                      Read More
                    </a>
                </div>
                <div className="relative lg:h-[25rem] h-[230px] lg:w-[25rem] w-[230px] lg:mx-0 mx-auto">
                  {/* <div className="linear-gradient absolute h-full w-full "></div> */}
                    <img src="/vamana.jpg" alt="Narasimha Avatar"
                    className="absolute w-full h-full object-contain lg:-top-20 lg:-left-8"
                    />
                    <div className="absolute -right-8 top-0 flex vertical-text ">
                    {/* p-className="text-sm rotate-text" */}
                      <p > Fifth incarnation </p>
                      <SlArrowRight className="text-white text-2xl rotate-45"/>
                    </div>
                  
                </div>
            </section>


            <div className="flex lg:flex-row flex-col-reverse pt-[10%] pb-[5%] justify-center gap-x-[10%]">
              <div className="relative lg:h-[25rem] h-[250px] lg:w-[25rem] w-[250px] lg:mx-0 mx-auto lg:py-0 justify-center items-center">
                {/* <div className="linear-gradient absolute h-full w-full "></div> */}
                  <img src="parashuram.jpg" alt="" className="absolute lg:w-[120%] w-full h-full object-contain lg:-top-20 lg:-left-0" />
                  <div className="absolute -left-8 flex vertical-text">
                    {/* p-className="text-sm rotate-text" */}
                    <p >Sixth Incarnation</p>
                    <SlArrowRight className="text-white text-2xl rotate-135"/>
                  </div>
              </div>
              <div className="text-white lg:w-1/4">
                <h2 className="lg:text-3xl">Parashurama (Warrior with an Axe) Avatar</h2>
                <p className="leading-7 py-6">arashurama was Lord Vishnu's sixth incarnation. Parashuram, the son of Jamadagni and Renuka, was given an axe by Lord Shiva in exchange for his penance.In Hinduism, he was the first Brahmin and Kshatriya (a warrior-saint) to share the responsibilities of both castes.The father of Parashurama was able to feed King Kartavirya Arjuna and his army with the celestial cow Kamadhenu when the king and his army visited the saint in his ashram.Jamadagni denied the king's request for the cow. The king infuriated, seized it, and subsequently leveled the ashram. The king was assassinated in his palace, and Parashurama single-handedly defeated his army.</p>
                <a href="#" className="text-black">Read More</a>
              </div>
            </div>


            <section className="lg:flex py-[10%] justify-center gap-x-[10%]">
                <div className="text-white lg:w-1/4">
                    <h2 className="lg:text-3xl">Rama (Prince/King of Ayodhya) Avatar</h2>
                    <p className="leading-7 py-6">Rama was Vishnu's seventh incarnation. In Hinduism, the incarnation of Lord Rama is venerated as the archetypal brave male. The Ramayana, which tells his story, is a sacred text in Hinduism.Ravana, the demon king of Sri Lanka, kidnapped Rama's wife, Sita, the daughter of King Janaka, when he was exiled from his own country for 14 years with his brother Lakshman and the God Hanuman.After killing the demon king, he went to Ashoka Vatika (or vanam) in Lanka to rescue Sita.</p>
                    <a href="#" className="text-black">
                      Read More
                    </a>
                </div>
                <div className="relative lg:h-[25rem] h-[230px] lg:w-[25rem] w-[230px] lg:mx-0 mx-auto">
                  {/* <div className="linear-gradient absolute h-full w-full "></div> */}
                    <img src="/Rama.jpg" alt="Rama Avatar"
                    className="absolute w-full h-full object-contain lg:-top-20 lg:-left-8"
                    />
                    <div className="absolute -right-8 top-0 flex vertical-text ">
                    {/* p-className="text-sm rotate-text" */}
                      <p > Seventh incarnation </p>
                      <SlArrowRight className="text-white text-2xl rotate-45"/>
                    </div>
                  
                </div>
            </section>


            <div className="flex lg:flex-row flex-col-reverse pt-[10%] pb-[5%] justify-center gap-x-[10%]">
              <div className="relative lg:h-[25rem] h-[250px] lg:w-[25rem] w-[250px] lg:mx-0 mx-auto lg:py-0 justify-center items-center">
                {/* <div className="linear-gradient absolute h-full w-full "></div> */}
                  <img src="balaram.jpeg" alt="" className="absolute lg:w-[120%] w-full h-full object-contain lg:-top-20 lg:-left-0" />
                  <div className="absolute -left-8 flex vertical-text">
                    {/* p-className="text-sm rotate-text" */}
                    <p >Eighth Incarnation</p>
                    <SlArrowRight className="text-white text-2xl rotate-135"/>
                  </div>
              </div>
              <div className="text-white lg:w-1/4">
                <h2 className="lg:text-3xl">Balarama (Philosopher & Guide) Avatar</h2>
                <p className="leading-7 py-6">According to the Sri Vaishnava lists, Balarama was Lord Vishnu's eighth incarnation or avatar.Balarama is also known as Baladeva, Balabhadra and Halayudha. He was Lord Krishna's older brother and is commonly recognized as an incarnation of Lord Vishnu.Lord Vishnu took the form of this man. Moreover, he is sometimes thought to be the Sankarshana form of Vishnu as well as the eighth avatar that Vishnu has taken..</p>
                <a href="#" className="text-black">Read More</a>
              </div>
            </div>

            <section className="lg:flex py-[10%] justify-center gap-x-[10%]">
                <div className="text-white lg:w-1/4">
                    <h2 className="lg:text-3xl">Krishna (Philosopher & Guide) Avatar</h2>
                    <p className="leading-7 py-6">Lord Vishnu took on the form of Krishna for the ninth time. Lord Krishna was Devaki and Vasudev's ninth child.In the Vaishnava sect of Hinduism, he is considered an avatar, or incarnation, of a deity. He made an appearance with his older sibling Balarama. The majority populace sees Balarama as an incarnation of Vishnu.Yet, in Sri Vaishnava lists, Balarama is included as the eighth avatar of Vishnu, while Buddha is absent, and Krishna is placed ninth.

</p>
                    <a href="#" className="text-black">
                      Read More
                    </a>
                </div>
                <div className="relative lg:h-[25rem] h-[230px] lg:w-[25rem] w-[230px] lg:mx-0 mx-auto">
                  {/* <div className="linear-gradient absolute h-full w-full "></div> */}
                    <img src="/krishna.jpg" alt="Krishna Avatar"
                    className="absolute w-full h-full object-contain lg:-top-20 lg:-left-8"
                    />
                    <div className="absolute -right-8 top-0 flex vertical-text ">
                    {/* p-className="text-sm rotate-text" */}
                      <p > Ninth incarnation </p>
                      <SlArrowRight className="text-white text-2xl rotate-45"/>
                    </div>
                  
                </div>
            </section>




            <div className="flex lg:flex-row flex-col-reverse pt-[10%] pb-[5%] justify-center gap-x-[10%]">
              <div className="relative lg:h-[25rem] h-[250px] lg:w-[25rem] w-[250px] lg:mx-0 mx-auto lg:py-0 justify-center items-center">
                {/* <div className="linear-gradient absolute h-full w-full "></div> */}
                  <img src="kalki.jpg" alt="" className="absolute lg:w-[120%] w-full h-full object-contain lg:-top-20 lg:-left-0" />
                  <div className="absolute -left-8 flex vertical-text">
                    {/* p-className="text-sm rotate-text" */}
                    <p >Tenth Incarnation</p>
                    <SlArrowRight className="text-white text-2xl rotate-135"/>
                  </div>
              </div>
              <div className="text-white lg:w-1/4">
                <h2 className="lg:text-3xl">Kalki (Eternity/White Horse) Avatar</h2>
                <p className="leading-7 py-6">According to Hinduism, the god Vishnu will take the form of Kalki, which literally translates to "destroyer of evil," as his tenth incarnation at the end of the Kali Yuga.According to the Purana scriptures, when the time comes for Kalki to return, he will do so mounted atop a white horse and brandishing a flaming sword.As per Hindu eschatology, he will be the one to announce the end of time, and then he will usher in the Satya Yuga that follows.</p>
                <a href="#" className="text-black">Read More</a>
              </div>
            </div>

            
        </div>
    </div>
  )
}
