import { siteConfig } from '@/lib/site-config'

export type ContentSection = { heading: string; paragraphs: readonly string[]; bullets?: readonly string[] }
export type QuestionAnswer = { question: string; answer: string }
export type ServicePageContent = {
  intro: string
  sections: ContentSection[]
  faqs: QuestionAnswer[]
  galleryImageIds: number[]
}

export const servicePageContent: Record<string, ServicePageContent> = {
  'permanent-tattoo': {
    intro: `A permanent tattoo is personal, so a useful first step is a clear conversation about the idea rather than choosing artwork in a hurry. If you are looking for a tattoo artist in ${siteConfig.city}, bring a reference, a rough sketch, a name or a feeling you want the finished piece to express. ${siteConfig.founder.name} and the team can discuss a custom tattoo in ${siteConfig.city} around the subject, placement and style you have in mind.`,
    sections: [
      {
        heading: 'Choose a style that fits the idea',
        paragraphs: [
          'Some ideas call for a small, restrained mark; others need more room for shape, shading or detail. Minimalist and fine-line designs depend on legibility at the intended scale. Telugu names and script benefit from careful spelling, character forms and line spacing. Couple and memorial tattoos can use a shared motif, dates or names, while portraits need clear reference photographs and a conversation about the level of detail possible at the chosen size.',
          'Black-and-grey work uses contrast rather than colour to build form. Religious designs may include symbols or figures that deserve thoughtful placement and respectful handling. These are starting points for a discussion, not a promise that every reference can be copied exactly. Bring examples you like, explain what matters most, and leave room for the artist to propose a composition suited to the body area.',
        ],
      },
      {
        heading: 'A considered custom-tattoo process',
        paragraphs: [
          `Begin with an enquiry describing the subject, approximate size, body placement and preferred ${siteConfig.city} studio. Include reference images if you have them, but identify the details you want to keep instead of asking for a direct copy. The conversation can then clarify whether the idea is ready to plan, whether more information is needed, and how a consultation or booking should proceed.`,
          'Before committing, review the proposed design, spelling, scale and position carefully. Ask questions about any part that is unclear and make sure the final version reflects your intention. Appointment availability, deposit terms, preparation steps and the exact studio process should be confirmed directly when booking; this page does not assume policies that have not been supplied.',
        ],
      },
      {
        heading: 'What can affect a tattoo quote?',
        paragraphs: [
          'There is no responsible one-size-fits-all quote without understanding the work. A studio may need to consider the design dimensions, detail, placement, estimated time, colour or shading requirements, and whether the tattoo is entirely new or needs to work around existing ink or skin. Reference quality, lettering length and portrait complexity can also affect the planning conversation.',
          'For a useful estimate, send the approximate size, body area, design references and preferred location through WhatsApp or the enquiry form. Ask what is included and whether the quote changes if the design or size changes. No prices are published here because current rates have not been confirmed. A written quote from the studio is the right source for your specific piece.',
        ],
      },
      {
        heading: 'Placement, comfort and preparation',
        paragraphs: [
          'The same artwork can read differently on a flat area, a curved area or a place that moves frequently. Think about how visible you want the tattoo to be, how it may sit with nearby designs and whether the chosen shape can follow the body naturally. Pain is personal and varies with placement, session length and individual sensitivity; a consultation can help you discuss practical expectations without promising a pain-free appointment.',
          'Ask the studio how to prepare and confirm your booking details before you travel. Raise any skin or health concern in advance, and seek healthcare advice where appropriate.',
        ],
      },
      {
        heading: 'Aftercare is part of the design journey',
        paragraphs: [
          'A finished tattoo still needs attentive care while the skin settles. Follow the specific written instructions provided by the artist, keep the area clean as directed, avoid picking or scratching, and do not apply products that were not recommended. Healing differs between people and placements, so a photograph or online timetable cannot diagnose a problem or guarantee how the tattoo will settle.',
          'Ask the studio how to contact them with an aftercare question, and read the studio’s 30-day tattoo aftercare guide before your visit. If you notice increasing redness, spreading warmth, worsening pain, pus, fever or other signs that concern you, contact a doctor rather than relying on a tattoo studio or website for medical care.',
        ],
      },
    ],
    faqs: [
      { question: `Can I request a custom tattoo in ${siteConfig.city}?`, answer: 'Yes. Send the subject, references, approximate size, body placement and preferred studio. The team can confirm whether the idea is suitable to plan and explain the next booking step.' },
      { question: 'Can you tattoo Telugu names or script?', answer: 'Telugu lettering can be discussed. Please verify the exact spelling, letterforms and meaning with a fluent Telugu reader before approving the final stencil.' },
      { question: 'Can I bring a portrait or religious reference?', answer: 'Yes, share a clear reference and explain the details that matter. Feasibility, scale, detail and placement should be reviewed with the artist before booking.' },
      { question: 'How is the tattoo price decided?', answer: 'The quote depends on the individual design, size, placement, detail and time involved. Current rates are not listed here; request a quote for your exact idea.' },
      { question: 'How long does a tattoo take to heal?', answer: 'Healing varies with the person and placement. Follow the artist’s written aftercare directions and contact a doctor if you notice signs of infection or another medical concern.' },
      { question: 'What age can I get a tattoo?', answer: siteConfig.confirmations.agePolicy },
    ],
    galleryImageIds: [4, 5, 8, 12, 16, 20],
  },
  piercing: {
    intro: `If you are comparing options for piercing in ${siteConfig.city}, begin by asking about the placement you want, jewellery options, appointment availability and aftercare. Rathnam Tattoos Studio lists piercing among its services, but a suitable choice depends on the requested placement and the details confirmed directly with the studio. This page is a starting point for an informed enquiry, not a substitute for an individual assessment or medical advice.`,
    sections: [
      {
        heading: 'Plan the placement before the appointment',
        paragraphs: [
          'A piercing is a visible choice and a healing commitment. Think about the look you want, how jewellery will sit with your everyday routine, and whether the proposed location works with headphones, helmets, work clothing or sport. Send the studio a short description or reference photo and ask whether the placement is currently available. The website does not list every piercing type or jewellery option, so confirm those details before making a trip.',
          'If you have a health condition, a history of difficult healing, a current skin concern or a question about suitability, raise it before booking and consult a qualified healthcare professional where appropriate. Do not rely on a general webpage to determine whether a procedure is safe for you. A responsible discussion leaves space for the practitioner to explain limitations and for you to decide without pressure.',
        ],
      },
      {
        heading: 'What to clarify when booking',
        paragraphs: [
          `Use the enquiry form or WhatsApp to describe the piercing you are considering, your preferred ${siteConfig.city} studio and any timing constraints. Ask what identification, consent or age documentation is required; the studio’s age policy has not been provided for this page. Also ask whether you need to choose jewellery in advance and whether there is anything you should avoid before arriving.`,
          'Before confirming, ask who will perform the service, what the appointment includes, what jewellery materials and sizes are available, how payment works and what aftercare instructions you will receive. These are practical questions, not assumptions about studio policy. Keep the studio’s reply so you can check the confirmed time, location and instructions later.',
        ],
      },
      {
        heading: 'What can affect the quote?',
        paragraphs: [
          'Pricing can depend on the requested placement, the jewellery selected, the work involved and any consultation or follow-up that applies. Because a current price list and jewellery range have not been supplied, this page intentionally does not quote a number. Ask for the total cost for the exact piercing and jewellery you are considering, and confirm any aftercare products or later visits separately.',
          'A useful enquiry includes the placement you have in mind, the jewellery look you prefer, the studio you plan to visit and your availability. If you are unsure which placement is right, say so. The team can tell you what they are able to discuss and whether an in-person conversation is needed before a decision.',
        ],
      },
      {
        heading: 'Aftercare needs consistency',
        paragraphs: [
          'Aftercare instructions should match the piercing and jewellery used. Follow the written directions given at your appointment rather than combining advice from multiple social posts. Ask what cleaning routine is recommended, what products to avoid, when it is appropriate to change jewellery, and which changes during healing should prompt a call to the studio.',
          'Do not twist, remove or replace jewellery based on guesswork. If the area becomes increasingly painful, hot, swollen or produces concerning discharge, or if you feel unwell, contact a doctor promptly. A website cannot assess an infection or tell you whether jewellery should be removed. For non-urgent questions, use the studio’s confirmed contact channel and explain when the piercing was done.',
        ],
      },
      {
        heading: 'Making a comfortable, informed choice',
        paragraphs: [
          'You should feel able to ask questions, pause and decline if an answer is not clear. Confirm the service, location, expected cost, appointment time and aftercare before proceeding. If the studio cannot provide the placement, jewellery or timing you want, ask whether it can suggest a suitable next step; do not assume a particular option is available until it is confirmed.',
          `For a visit in ${siteConfig.city}, choose between the ${siteConfig.locations[0].neighborhood} and ${siteConfig.locations[1].neighborhood} studios and include that choice in your message. Read the piercing aftercare article and contact page before booking. Accurate expectations and clear communication make it easier to plan a visit that fits your preference without treating every piercing as identical.`,
        ],
      },
    ],
    faqs: [
      { question: `Do you offer piercing in ${siteConfig.city}?`, answer: 'Piercing is listed among the studio’s services. Ask the team to confirm the requested placement, jewellery availability and appointment details before visiting.' },
      { question: 'What piercing placements are available?', answer: 'The site does not list a confirmed placement menu. Message the studio with the area you have in mind and ask what is currently offered.' },
      { question: 'What jewellery can I choose?', answer: 'Jewellery materials, styles, sizes and stock have not been confirmed here. Ask for the available options and total quote when enquiring.' },
      { question: 'How should I care for a new piercing?', answer: 'Follow the specific aftercare instructions given for your piercing and jewellery. Contact a doctor for possible infection or another medical concern.' },
      { question: 'Is there an age requirement?', answer: siteConfig.confirmations.agePolicy },
      { question: 'Can I walk in?', answer: 'Walk-in availability is not confirmed. Contact the studio first to check whether an appointment is needed and which location can help.' },
    ],
    galleryImageIds: [2, 7, 13, 19, 25, 31],
  },
  'scar-coverup': {
    intro: `A scar cover up tattoo in ${siteConfig.city} begins with an individual conversation about the scar, your design idea and what you hope the finished artwork will do. Existing ink can also be discussed as an old tattoo cover up. Neither a scar nor an older tattoo can be assessed accurately from a keyword or a single photo, so the first step is to ask whether an in-person review is appropriate and what information the artist needs.`,
    sections: [
      {
        heading: 'Understand the starting point',
        paragraphs: [
          'Scars vary in age, texture, colour, shape and sensitivity. Existing tattoos differ in pigment, density, line work and placement. Those differences influence what an artist can explore, but they do not make a particular cover-up possible or guarantee that a mark will disappear. Share a clear photograph only if comfortable, explain whether the area is fully healed, and ask what the studio needs to review the design safely.',
          'Do not request tattooing over skin that is still healing, irritated or showing signs of a medical problem. If you are uncertain whether a scar is ready or have concerns about a raised, changing or painful area, consult a healthcare professional before arranging tattoo work. A studio consultation can discuss visual design; it is not a medical diagnosis or treatment plan.',
        ],
      },
      {
        heading: 'Design around the existing mark',
        paragraphs: [
          'A cover-up plan usually starts with the shape and boundaries of the area, then considers how an image might draw attention toward or away from particular lines. Contrast, scale, negative space and body movement may all matter. A small fine-line idea may not suit every dark or broad old tattoo, and a scar’s surface can affect how the artist approaches a composition. The right conversation is specific to your skin and reference.',
          'Bring examples of artwork you genuinely like, but also point out what you do not want repeated. Ask to see how the proposed idea would relate to the existing tattoo or scar, what remains visible, and whether a larger or different design should be considered. No page or mock-up can promise complete concealment, a particular final appearance or a specific healing outcome.',
        ],
      },
      {
        heading: 'Consultation and booking questions',
        paragraphs: [
          'When you enquire, include the approximate size and location, whether the request concerns a scar or an older tattoo, and which studio you would prefer. Ask whether the artist wants photographs or an in-person consultation, what design references are useful and how the appointment is booked. If the area has changed recently or is not completely settled, explain that rather than presenting it as ready for tattooing.',
          'Before proceeding, confirm the proposed design, approximate scale, quote, appointment time and aftercare. Ask what factors could change the plan and whether the artist recommends waiting or seeking medical guidance first. Appointment availability, deposit rules and exact consultation arrangements should be confirmed directly with the studio; they are not stated as fixed policies on this page.',
        ],
      },
      {
        heading: 'What affects the quote?',
        paragraphs: [
          'A quote may need to account for the size and complexity of the new design, the existing ink or scar, the amount of detail, placement and estimated time. Covering older, dense or uneven work may call for a different approach than creating a new tattoo on clear skin. A design that changes after review can change the estimate, so request a quote once the artist has understood the area and brief.',
          'There are no prices on this page because the studio’s current rate information has not been confirmed. Send a concise enquiry and ask for the complete quote for the plan discussed. Make sure you understand what the estimate covers before setting a date. A real assessment is more useful than a generic online price range for work that varies from person to person.',
        ],
      },
      {
        heading: 'Aftercare and realistic expectations',
        paragraphs: [
          'Follow the artist’s written instructions for the new tattoo. Avoid picking or unapproved products, and seek medical advice if the area changes or symptoms concern you; studio aftercare is not a clinical assessment.',
          'Use a consultation to review suitability and expectations. A cover-up changes the visible design; it does not erase a scar or old tattoo. Ask what may remain visible before committing.',
        ],
      },
    ],
    faqs: [
      { question: 'Can a tattoo cover every scar?', answer: 'No universal answer is possible. Scar age, texture, location and healing matter; request an individual review and seek medical advice if the area is not fully settled.' },
      { question: 'Can you cover an old tattoo?', answer: 'An old tattoo can be discussed as a cover-up enquiry. Feasibility depends on the existing design, ink, size and the new idea, so ask for an individual consultation.' },
      { question: 'Will a cover-up completely hide the original mark?', answer: 'A specific concealment result cannot be promised. Ask the artist what may remain visible and review the proposed design before booking.' },
      { question: 'What should I send with my enquiry?', answer: `Share the body area, approximate dimensions, whether it is a scar or existing tattoo, reference ideas and preferred ${siteConfig.city} studio.` },
      { question: 'How much does a scar cover-up cost?', answer: 'The quote depends on the area, new design, detail and time involved. Current rates are not published; request a quote after the studio reviews your brief.' },
      { question: 'Can an unhealed scar be tattooed?', answer: 'Do not book tattooing over a healing or irritated area. Ask a qualified healthcare professional about skin readiness and contact the studio once settled.' },
    ],
    galleryImageIds: [3, 4, 11, 17, 23, 29],
  },
  'tattoo-removal': {
    intro: `If you are searching for tattoo removal in ${siteConfig.city}, start by asking what service is currently available and who will assess your tattoo. The studio lists tattoo removal as an enquiry category, but no treatment method, eligibility rule, session count, price or outcome has been confirmed for this page. We will not fill those gaps with assumptions. A direct conversation is essential before deciding whether removal or another option fits your situation.`,
    sections: [
      {
        heading: 'First confirm the service and method',
        paragraphs: [
          'Removal is not one standard appointment that can be described accurately for every person. Before booking, ask the studio to confirm the method it uses, who performs the service, what assessment is included, which tattoo characteristics matter and what risks or limitations should be discussed. If removal is not currently available at the selected studio, ask for that confirmation before arranging travel or sharing sensitive photographs.',
          'Do not assume that one method is appropriate for your skin or tattoo. A qualified practitioner should explain the process, expected discomfort, aftercare, possible side effects and when medical advice is needed. Ask how the professional’s credentials and suitability assessment can be checked. The website does not state a technique or claim that any specific colour, age or placement can be treated.',
        ],
      },
      {
        heading: 'What an initial enquiry can include',
        paragraphs: [
          'To make a conversation more useful, describe the approximate size and body area, how long you have had the tattoo, whether it is an existing cover-up, and what change you are hoping for. You can ask whether photographs are useful and how they will be handled. Include your preferred Vijayawada studio and a safe way for the team to reply. Do not send medical records or private images unless the studio has explained a secure, appropriate channel.',
          'The professional may need to see the tattoo in person before commenting. If a clinician’s assessment is advised, follow that route rather than relying on a message or online image. Ask what steps happen before treatment, what consent information is provided and what circumstances would lead the practitioner to recommend waiting or declining.',
        ],
      },
      {
        heading: 'Questions about cost and sessions',
        paragraphs: [
          'A quote cannot be responsibly reduced to a number without knowing the confirmed method, the tattoo and the proposed plan. Ask whether the quote is per visit or for a wider course, what each amount covers, whether an assessment is charged separately and how any additional visits are priced. Request the answer in writing so you can compare the full cost rather than a single advertised figure.',
          'The number and timing of sessions, if any, must be assessed by a qualified practitioner after confirming the method. We do not claim a typical session count or a removal timeline. Ask how the provider will explain progress, what results cannot be guaranteed and what options exist if the tattoo does not respond as expected. A second opinion can help you make a considered decision.',
        ],
      },
      {
        heading: 'Removal, cover-up or keeping the tattoo',
        paragraphs: [
          'Removal is one possible direction to explore, while a tattoo artist may also be able to discuss a cover-up if the area is suitable. They are not interchangeable services: a cover-up adds new artwork, whereas removal enquiries require a separate conversation about the treatment actually offered. Some people choose to wait and gather more information. There is no pressure to choose before understanding the options and their limits.',
          'If you are considering a cover-up, see the dedicated scar and old tattoo cover-up page and ask the artist whether your existing ink can be incorporated. Do not assume a removal service is necessary before every cover-up, or that removal will produce a blank canvas. Any recommendation must be based on your individual assessment, not an online promise.',
        ],
      },
      {
        heading: 'Safety and aftercare questions',
        paragraphs: [
          'Before proceeding, ask what risks apply to the confirmed method, what skin conditions or medicines need to be disclosed, who to contact with a reaction and when urgent care is appropriate. Tell the provider about relevant health history and ask whether a doctor should be involved. The studio’s method and practitioner details are awaiting confirmation, so use a qualified healthcare professional for medical questions.',
          'Follow only the written aftercare instructions provided for the procedure you actually receive. If you develop severe or worsening pain, spreading redness, fever, unexpected discharge, blistering or another worrying symptom, contact a doctor or urgent medical service. Do not rely on this general page to diagnose a complication or alter a prescribed treatment plan.',
        ],
      },
    ],
    faqs: [
      { question: `Do you currently offer tattoo removal in ${siteConfig.city}?`, answer: siteConfig.confirmations.removalMethod },
      { question: 'Which tattoo removal method do you use?', answer: siteConfig.confirmations.removalMethod },
      { question: 'How many sessions will I need?', answer: 'No session count is published or promised. Ask a qualified practitioner to assess your individual tattoo and explain the confirmed method.' },
      { question: 'How much does tattoo removal cost?', answer: 'Current prices have not been confirmed. Request a written quote after the service, method and assessment process are verified.' },
      { question: 'Can I cover up a tattoo instead?', answer: 'A cover-up can be discussed separately with the tattoo artist. Suitability depends on the existing work and new design; no concealment result is guaranteed.' },
      { question: 'What should I do if the treated area looks infected?', answer: 'Contact a doctor or appropriate medical service promptly. A website or tattoo studio cannot diagnose an infection.' },
    ],
    galleryImageIds: [1, 3, 4, 9, 15, 21],
  },
}

export const studioPageContent = {
  'guru-nanak-colony': {
    title: `Tattoo Studio in ${siteConfig.locations[0].neighborhood}, ${siteConfig.city}`,
    description: `Visit ${siteConfig.locations[0].name} in ${siteConfig.city}, identified by ${siteConfig.locations[0].landmark}.`,
    intro: `The ${siteConfig.locations[0].neighborhood} studio is the ${siteConfig.city} location identified by ${siteConfig.locations[0].landmark}. The address also names ${siteConfig.locations[0].line2}, helping visitors distinguish this side of the city from the separate ${siteConfig.locations[1].neighborhood} studio. If you are planning a tattoo, piercing or consultation, choose this location in your enquiry so the team can confirm the appointment details for the right studio.`,
    sections: [
      { heading: 'Find the studio by its landmarks', paragraphs: [`Use ${siteConfig.locations[0].landmark} as the clearest landmark when checking the destination. The address supplied for this location is ${siteConfig.locations[0].line2}, ${siteConfig.locations[0].line3}. Check the map and directions link before you travel, and compare the complete address with your booking confirmation so you do not head to the ${siteConfig.locations[1].neighborhood} location by mistake.`] },
      { heading: 'Plan a visit around your appointment', paragraphs: ['Send the requested service, body placement or piercing idea, approximate size where relevant, preferred date and this studio location through WhatsApp or the contact form. Ask the team to confirm the appointment, current service availability and any preparation instructions before setting out. Opening hours have not been confirmed; please contact the studio rather than assuming a walk-in window or a particular day is available.'] },
      { heading: 'Getting directions and contacting the team', paragraphs: [`The embedded map and directions link use the address already supplied for the ${siteConfig.locations[0].neighborhood} studio. Navigation estimates and road conditions can change, so follow the live map for your starting point and verify the destination landmark. For a question before travelling, call either listed studio number or use WhatsApp. Ask which number is best for your appointment and retain the reply with the confirmed address.`] },
      { heading: 'Read the address before setting out', paragraphs: [`Enter the full address from your appointment message and check that the destination includes ${siteConfig.locations[0].landmark}. The address also includes ${siteConfig.locations[0].line2}; compare those details if your navigation app offers more than one result. Use the live route from your own starting point rather than relying on a fixed travel-time estimate from this page. Road conditions and navigation suggestions may change.`, `If you are unfamiliar with the area, keep the studio’s phone number available in case you need to confirm the final landmark. The map is provided to help identify the address, not to promise parking, a particular entry point or a specific public-transport route. Ask the team about any access question that matters for your visit before you leave.`] },
      { heading: 'Make the appointment details specific', paragraphs: [`When you contact the studio, say that you mean the ${siteConfig.locations[0].neighborhood} location and repeat the address in the confirmation you receive. Include the service you want to discuss and the date or time that works for you. For tattoo enquiries, a reference, approximate size and body area help frame the conversation. For piercing, describe the placement you are considering. Wait for a reply confirming the appointment before travelling.`, 'Opening hours, walk-in availability, appointment rules and any preparation steps have not been supplied as fixed details here. Ask what applies to your visit, and save the studio’s answer alongside the address. This makes it easier to tell the two Vijayawada locations apart and avoids assuming that information for one studio also applies to the other.'] },
    ],
  },
  krishnalanka: {
    title: `Tattoo Studio in ${siteConfig.locations[1].neighborhood}, ${siteConfig.city}`,
    description: `Find ${siteConfig.locations[1].name} near ${siteConfig.locations[1].landmark} in ${siteConfig.city}.`,
    intro: `The ${siteConfig.locations[1].neighborhood} studio is the ${siteConfig.city} location identified by ${siteConfig.locations[1].landmark}. Use those details to separate it from the ${siteConfig.locations[0].neighborhood} studio at ${siteConfig.locations[0].landmark}. When making an enquiry, name ${siteConfig.locations[1].neighborhood} explicitly so the team can confirm the right appointment location and directions.`,
    sections: [
      { heading: 'Use the local landmarks to orient your visit', paragraphs: [`The location details supplied for this studio mention ${siteConfig.locations[1].landmark}. Its postal address is ${siteConfig.locations[1].line2}, ${siteConfig.locations[1].line3}. Open the embedded map and directions link before leaving, then compare the destination with your booking message. These landmarks help identify the location, but live route guidance is the best source for the journey from your current starting point.`] },
      { heading: 'Choose the right location when booking', paragraphs: [`Tell the team that you prefer ${siteConfig.locations[1].neighborhood} and describe whether your enquiry is for a tattoo, piercing, cover-up discussion or removal information. Include the approximate size and body placement for tattoo work, plus a reference if it is useful. Wait for the studio to confirm the service, date and address before travelling. Walk-in availability and opening hours are not confirmed on this page.`] },
      { heading: 'Directions, travel and contact', paragraphs: [`The Google Maps directions link is built from the supplied ${siteConfig.locations[1].neighborhood} landmarks rather than unverified coordinates. Follow current road and bus information for your route, and confirm the final destination with the team if navigation displays more than one nearby result. For help planning a visit, call one of the listed numbers or send a WhatsApp enquiry. Save the studio’s reply so its location and appointment details remain easy to check.`] },
      { heading: 'Using the bus-stand landmarks', paragraphs: [`The address supplied for this location identifies ${siteConfig.locations[1].landmark}. If you are using the APSRTC Bus Stand as a reference point, check the live map for the route from your arrival point to the exact studio address. This page does not assume a particular exit, walking distance or transit connection. Compare the destination shown by your map with the appointment message before continuing.`, 'For a journey with several stages, plan from the stop or station you will actually use and allow time to check the location details. Local routes can change, and a familiar landmark may have more than one map result. If the destination pin or listed address is unclear, contact the studio and ask for confirmation rather than guessing which nearby building is correct.'] },
      { heading: 'Keep the Krishnalanka booking distinct', paragraphs: [`When enquiring, state that you prefer the ${siteConfig.locations[1].neighborhood} studio, not the ${siteConfig.locations[0].neighborhood} location. Share the requested service, approximate tattoo size and body area where relevant, then wait for the team to confirm the date, appointment time and address. Ask whether you need a booking and what preparation applies to your particular service; no walk-in schedule or opening hours have been confirmed here.`, 'Before leaving, read the final address in the studio’s reply and make sure the landmark matches the map you intend to follow. Keep a contact number with you if plans change. The two locations have different local references, so naming Krishnalanka in both your first enquiry and any follow-up helps the team direct your question to the correct visit details.'] },
    ],
  },
} as const

export const faqItems: QuestionAnswer[] = [
  { question: 'Does getting a tattoo hurt, and does the body area matter?', answer: 'Pain is subjective and varies with placement, session length and personal sensitivity. Ask the artist about your chosen body area and plan breaks if appropriate; no location can be described as pain-free for everyone.' },
  { question: 'How long does tattoo healing take?', answer: 'Healing is individual and can differ by placement, size and personal skin response. Follow the artist’s written instructions, avoid picking at the tattoo, and seek medical advice for infection signs or other concerning symptoms.' },
  { question: 'What is the minimum age for a tattoo or piercing?', answer: siteConfig.confirmations.agePolicy },
  { question: 'What hygiene and sterilisation practices are used?', answer: siteConfig.confirmations.hygiene },
  { question: 'How do I book an appointment?', answer: 'Use the enquiry form or WhatsApp with your service, idea, approximate size, body placement and preferred studio. Wait for the team to confirm availability, location and any appointment requirements.' },
  { question: 'What affects the price of a tattoo?', answer: 'Design dimensions, detail, placement, colour or shading, estimated time and whether the work is a cover-up can all affect a quote. Ask the studio for current pricing on your specific brief.' },
      { question: 'Are touch-ups included in the original price?', answer: siteConfig.confirmations.touchUpPolicy },
  { question: 'Can you cover a scar or an old tattoo?', answer: 'Possibilities depend on the specific scar or existing tattoo and the new design. Arrange an individual review; no page can promise complete concealment or a particular result.' },
  { question: 'How many tattoo removal sessions will I need?', answer: 'The method offered and a session count have not been confirmed. Ask a qualified practitioner for an individual assessment; this website does not promise a removal timeline or result.' },
]

export const teluguFaqItems: QuestionAnswer[] = [
  { question: 'విజయవాడలో టాటూ అపాయింట్‌మెంట్ ఎలా బుక్ చేసుకోవాలి?', answer: 'మీ టాటూ ఆలోచన, శరీర భాగం, అంచనా పరిమాణం మరియు మీకు కావలసిన స్టూడియో వివరాలతో WhatsApp లేదా enquiry form ద్వారా సందేశం పంపండి. అపాయింట్‌మెంట్‌ను స్టూడియోతో నిర్ధారించండి.' },
  { question: 'టాటూ డిజైన్ మరియు ప్లేస్‌మెంట్‌ను ముందుగా చర్చించవచ్చా?', answer: 'అవును. మీ reference చిత్రాలు, డిజైన్ ఆలోచన, పరిమాణం మరియు ప్లేస్‌మెంట్ గురించి సందేశంలో వివరించండి. తుది డిజైన్‌ను అంగీకరించే ముందు స్పెల్లింగ్‌ను తనిఖీ చేయండి.' },
  { question: 'స్టూడియోకు వచ్చే ముందు ఏ వివరాలు పంపాలి?', answer: 'మీరు కోరుకునే సేవ, శరీర భాగం, అంచనా పరిమాణం, అందుబాటులో ఉన్న తేదీలు మరియు Guru Nanak Colony లేదా Krishnalanka స్టూడియో ఎంపికను పంపండి.' },
].map((item) => ({
  question: `${item.question} ${siteConfig.confirmations.teluguCopy}`,
  answer: `${item.answer} ${siteConfig.confirmations.teluguCopy}`,
}))

export const aftercareStages: ContentSection[] = [
  {
    heading: 'Day 0: the appointment day',
    paragraphs: [
      'Before leaving, ask the artist to explain the written aftercare instructions for your tattoo, including how long any covering should remain in place and how to clean the area. Advice can differ by dressing and procedure, so follow the directions you were given rather than copying a routine from another person. Wash your hands before touching the tattoo and avoid unnecessary contact with the fresh skin.',
      'Keep the area protected from rubbing, dirt and avoidable contact. Do not remove a dressing early unless the artist’s instructions tell you to. If you do not understand a step, ask the studio to clarify it before you leave or message them using the contact details on your appointment confirmation.',
    ],
  },
  {
    heading: 'Days 1–3: gentle, clean and hands-off',
    paragraphs: [
      'Clean the tattoo only as directed by the artist. Use clean hands, avoid scrubbing, and pat dry with a clean material if that matches the instructions you received. Use only the products the artist specifically recommends; a product that suits one person may irritate another. Keep clothing loose enough to avoid repeated friction over the fresh tattoo.',
      'Do not scratch, pick, peel or deliberately expose the tattoo to soaking water. Avoid swimming and activities that conflict with the written aftercare you were given. Mild changes can occur while skin heals, but this general guide cannot assess your tattoo. Contact a doctor for symptoms that suggest infection or a medical problem.',
    ],
  },
  {
    heading: 'Days 4–7: continue the routine',
    paragraphs: [
      'Keep following the same artist-provided cleaning and product directions. Healing skin can feel dry or itchy, but scratching or pulling at flaking skin can disturb it. Let loose skin shed on its own, and avoid trying to speed the process with exfoliants, fragranced products or home remedies that were not recommended for you.',
      'Choose clothing and daily activities that do not repeatedly rub or contaminate the area. Keep the tattoo out of pools, baths and other prolonged soaking unless your artist has clearly told you that it is safe to resume. If work, sport or travel makes aftercare difficult, ask the studio for advice tailored to your placement.',
    ],
  },
  {
    heading: 'Days 8–14: protect healing skin',
    paragraphs: [
      'Continue to avoid picking, scratching and unapproved creams while the area settles. A tattoo may look different as surface skin changes; do not judge the final appearance from an online example or a single day of healing. If you have a concern about how it is settling, contact the artist with a clear description and follow the written instructions already provided.',
      'Do not assume the skin is ready for swimming, intense friction or sun exposure just because it looks calmer. Ask the artist when your specific tattoo can return to normal activities. Seek medical attention if pain, redness, warmth or discharge is worsening or if you feel unwell.',
    ],
  },
  {
    heading: 'Days 15–30: keep caring and check in',
    paragraphs: [
      'Over the rest of the first month, keep the area clean and avoid unnecessary irritation. Resume activities according to the artist’s guidance and your own skin’s condition, not a fixed calendar alone. If you remain uncertain about healing, send the studio a message and ask whether an in-person review is appropriate. Avoid making changes to the tattoo or applying treatments without advice.',
      'Contact a doctor promptly for possible infection signs, including spreading redness, increasing heat, worsening pain, pus, fever or feeling systemically unwell. Severe symptoms need urgent medical attention. Do not wait for a studio reply when symptoms are urgent, and do not rely on this 30-day guide to diagnose or treat a health concern.',
    ],
  },
]

export type BlogPost = {
  slug: string
  title: string
  description: string
  publishedTime: string
  sections: ContentSection[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'tattoo-cost-vijayawada',
    title: 'Tattoo Cost in Vijayawada: What Affects the Price',
    description: 'Learn which design, size, placement and planning details can affect a tattoo quote in Vijayawada, without relying on generic price promises.',
    publishedTime: siteConfig.fixedSitemapDate,
    sections: [
      { heading: 'Why a tattoo quote needs context', paragraphs: [
        `People comparing tattoo cost in ${siteConfig.city} often want one quick number. A number without the design, dimensions and placement can be misleading, because a small lettering idea and a detailed portrait are not the same job. Rather than advertise an unverified rate, this guide explains what to share when requesting a quote from Rathnam Tattoos Studio and which questions make the answer more useful.`,
        'A quote should relate to the work being discussed, not a vague category such as “small tattoo”. Two designs that occupy a similar area may need different planning and time. The final estimate should be confirmed directly with the studio after it understands your idea. If the artwork, placement or size changes, ask whether the revised brief changes the price before you approve it.',
      ] },
      { heading: 'Design size, detail and style', paragraphs: [
        'Dimensions are a practical starting point, but size alone does not describe complexity. A fine-line symbol, a name in script, a shaded black-and-grey composition and a portrait can call for different levels of drawing and attention. Lettering length, line density, colour, contrast and the amount of detail you expect may shape the planning discussion. Reference images help the artist understand what you mean by words such as “minimal” or “detailed”.',
        'A good enquiry explains what should stay in the design and what can be adapted. If you have several references, identify the parts you like in each rather than asking the artist to combine them without direction. A custom composition may require a conversation before a reliable estimate is possible. Ask how many design changes are included, what approval looks like and when the final design is shown.',
      ] },
      { heading: 'Placement and existing tattoos', paragraphs: [
        'The body area can affect how a design sits, how it is sized and how an appointment is planned. A curved or frequently moving area may need a composition that reads well from more than one angle. The artist can discuss whether your intended artwork suits the selected placement and whether a different scale would preserve the details you care about. Pain and healing vary by person and body area, so ask about practical considerations separately from price.',
        'Work over existing ink is a different conversation from new work on clear skin. If the request is to cover an older tattoo or incorporate a scar, send the location and approximate dimensions, and ask whether the artist needs an in-person review. Do not assume a new design can hide every existing line or scar. The quote depends on what is suitable after the artwork and skin have been considered.',
      ] },
      { heading: 'Time, colour and preparation', paragraphs: [
        'Estimated appointment time, colour or shading choices and the amount of detail may all be relevant to a quote. Ask the studio how it estimates time and whether the price is fixed for the agreed design or may change if the scope expands. There is no need to choose every detail before your first enquiry, but it helps to state what is settled and what you want advice on.',
        'Preparation and booking terms should also be clear. Ask whether an appointment deposit applies, how rescheduling works and what the quoted amount includes. These details can change from one studio to another, so this article does not invent a deposit, cancellation rule or included service. Keep the written response and check it again if you change the appointment or design.',
      ] },
      { heading: 'How to request a useful estimate', paragraphs: [
        `Send the subject, approximate size, body placement, style references and preferred studio in ${siteConfig.city}. Mention whether the idea includes Telugu script, a portrait, colour, an old-tattoo cover-up or a scar. If you are still exploring, say so; an estimate can be a starting point for a design conversation rather than an obligation to book. Use the enquiry form or WhatsApp and wait for the studio to confirm the next step.`,
        'Before accepting a quote, ask what is included, whether design revisions affect it, when payment is due and how the amount changes if the final dimensions change. Confirm the correct studio location and appointment time as well. Avoid comparing two quotes unless you know they cover similar artwork, scope and services. The cheapest figure is not automatically the most complete estimate.',
      ] },
      { heading: 'Questions worth asking before you book', paragraphs: [
        'A clear booking conversation should leave you comfortable with the proposed design, placement, estimated time, quote and aftercare. Ask who will answer questions if the reference changes, how to share a concern and what preparation the artist recommends. If any important detail is unclear, pause and ask for clarification before sending money or travelling. You can request a written summary so the agreed version is easy to revisit.',
        'No online guide can calculate an exact quote for an unseen tattoo. The studio’s current pricing, availability and booking terms should come directly from the team. If an estimate is outside your budget, discuss a smaller or simpler direction rather than asking for a price that ignores the work involved. A considered design and transparent scope help both the client and artist understand what is being planned.',
      ] },
    ],
  },
  {
    slug: 'tattoo-removal-vs-cover-up',
    title: 'Tattoo Removal vs Cover-Up: Which Is Right for You',
    description: 'Compare the questions to ask about tattoo removal and a new cover-up design before choosing your next step in Vijayawada.',
    publishedTime: siteConfig.fixedSitemapDate,
    sections: [
      { heading: 'Start with what you want to change', paragraphs: [
        'A tattoo you no longer connect with can bring up a practical question: should you explore removal, a cover-up, or simply take more time before deciding? There is no universal answer. Removal is a separate treatment conversation whose method and suitability must be confirmed with a qualified provider. A cover-up is new tattoo artwork planned in relation to existing ink. Each route has different questions, and neither should be chosen on the promise of a guaranteed result.',
        'Begin by writing down what bothers you: the subject, colour, size, placement, lettering or the fact that the tattoo is there at all. Also note what you would like instead, if anything. If you are unsure, say that. A consultation is more useful when it explores your goal rather than pushing you toward a predetermined procedure.',
      ] },
      { heading: 'What a cover-up conversation involves', paragraphs: [
        'For a cover-up, the artist needs to understand the existing tattoo and the new direction you are considering. Share a clear description, approximate dimensions and body area, then ask whether photographs or an in-person review are needed. The existing pigment, line density, shape and placement can affect which compositions are worth discussing. A design that works on blank skin may not be appropriate over darker or more detailed work.',
        'Ask what parts of the old tattoo may remain visible and whether the new artwork would need to be larger or different from your first idea. A cover-up changes the visible design by adding another tattoo; it does not mean the original ink has been removed. No sketch or website can guarantee how the finished tattoo will look or heal. Request a realistic explanation before approving a design.',
      ] },
      { heading: 'What to verify about removal', paragraphs: [
        'For removal, first confirm whether the chosen provider currently offers the service and which method is actually used. Ask who performs it, what qualifications and assessment are involved, what risks and aftercare apply, and what factors might make treatment unsuitable. Method, session count, intervals, cost and results have not been confirmed for Rathnam Tattoos Studio on this page, so no treatment claim should be inferred from this article.',
        'A qualified practitioner should explain what can and cannot be predicted for your individual tattoo and skin. Ask how progress is reviewed, what side effects may occur, who to contact with a reaction and when to involve a doctor. Consider a second opinion if you do not understand the answer or feel pressured to proceed. The right decision can include waiting until you have the information you need.',
      ] },
      { heading: 'Compare the questions, not just the pictures', paragraphs: [
        'Before comparing examples online, remember that photographs may not show the same lighting, healing stage or starting tattoo. Ask what the image actually represents, whether it is the artist’s work and whether it is comparable to your own situation. A striking before-and-after image is not a promise that your tattoo will respond in the same way. Ask about limitations in plain language and request a clear account of uncertainty.',
        'For a cover-up quote, ask what design, dimensions, session plan and aftercare are included. For removal, ask about the confirmed method, assessment, number of visits if an estimate is possible, total cost and risks. These are different services, so a price comparison is only useful when you understand what each quote covers. Avoid choosing based on a single number or a caption without context.',
      ] },
      { heading: 'Skin concerns and medical advice', paragraphs: [
        'If the area is irritated, painful, changing, recently injured or not fully healed, ask a healthcare professional before planning tattoo work or a removal procedure. A tattoo artist can discuss design but cannot diagnose a skin condition. Tell the relevant provider about health conditions, medicines, past reactions and any prior procedures that could matter to an assessment.',
        'After a tattoo or treatment, use only the aftercare instructions provided for that specific procedure. Seek medical care for increasing pain, spreading redness, warmth, pus, fever or another symptom that concerns you. Do not delay urgent care while waiting for a reply from a studio, and do not use a general article as a diagnosis.',
      ] },
      { heading: 'A decision checklist for your consultation', paragraphs: [
        'Bring the approximate size, body area, age of the tattoo, clear reference photographs if requested and a concise explanation of your goal. Ask whether removal or cover-up is the right service to discuss, what assessment is needed, which details remain uncertain and what the total cost could include. You should understand who is providing the service and how to raise questions later.',
        `If you are in ${siteConfig.city}, choose the ${siteConfig.locations[0].neighborhood} or ${siteConfig.locations[1].neighborhood} studio when you contact the team. Ask which location can handle your enquiry and whether a booking is required. You do not need to make a final decision during the first conversation. Take time to compare the options with a qualified professional and choose only when the plan and its limits make sense to you.`,
        'Use the consultation to compare your own priorities rather than a provider’s preferred solution. Write down the questions you still have about appearance, medical assessment, timing, cost, healing and follow-up. If answers differ between providers, ask what assessment they are based on. Keep the details together so you can revisit them calmly after the appointment. Taking notes gives you a clearer basis for deciding, and it is always acceptable to pause, seek another qualified opinion or decide that neither option suits you now.',
      ] },
    ],
  },
  {
    slug: 'piercing-aftercare-guide',
    title: 'Piercing Aftercare Guide',
    description: 'A practical piercing aftercare guide on hygiene, irritation, jewellery questions and when to seek medical advice.',
    publishedTime: siteConfig.fixedSitemapDate,
    sections: [
      { heading: 'Use instructions for your exact piercing', paragraphs: [
        'Piercing aftercare is not identical for every placement, jewellery type or person. Before leaving an appointment, ask the practitioner for written instructions that match the service you received. Confirm what to clean with, how often to do it, what products to avoid, how long to keep the initial jewellery in place and when a change might be appropriate. Do not replace those directions with a routine copied from a different piercing.',
        'If you have not booked yet, ask the studio what aftercare information it provides and whether any products are recommended. Product suggestions and jewellery details have not been confirmed for Rathnam Tattoos Studio on this page. Do not assume a particular material, cleaner or follow-up service is included until the team confirms it directly.',
      ] },
      { heading: 'Keep hands and surfaces clean', paragraphs: [
        'Wash your hands before touching the area for care. Avoid unnecessary contact, twisting or playing with the jewellery, and keep hair, clothing, headphones or equipment from rubbing the piercing when possible. Clean surrounding items that regularly touch the area, such as a phone or pillowcase, in a way that fits your everyday routine. These steps reduce avoidable handling but do not replace the practitioner’s instructions.',
        'Do not share jewellery or use tools to adjust it yourself. If a piece feels tight, catches repeatedly or seems to change position, ask the practitioner what to do. Removing or changing jewellery without advice may complicate the situation, and a professional or clinician should guide decisions when pain, swelling or infection is a concern.',
      ] },
      { heading: 'Expect healing to vary', paragraphs: [
        'The time a piercing takes to settle can vary with location, individual healing and daily friction. A calmer appearance does not always mean the piercing is ready for a jewellery change. Ask the practitioner what signs they use to judge readiness and whether a check-in is appropriate. Do not plan a change around a generic number of days found online.',
        'For a new piercing, consider practical routines before booking: sports, helmets, work clothing, travel and sleeping position may affect how easy it is to protect the area. Ask how those activities can be managed for the specific location. If the practitioner advises delaying or changing the plan, ask for the reason and make an informed choice rather than rushing to meet an event date.',
      ] },
      { heading: 'Avoid common sources of irritation', paragraphs: [
        'Repeated pressure, snagging, friction and touching can irritate a fresh piercing. Avoid swimming or soaking if the instructions say to keep the area dry, and do not apply cosmetics, fragrances, alcohol, ointments or home remedies unless your practitioner or clinician specifically recommends them. General advice cannot account for allergies or the exact jewellery used, so ask before introducing a product.',
        'A piercing may feel tender during healing, but worsening discomfort or a change that worries you deserves attention. Contact the studio for a non-urgent question about the appointment and contact a doctor for possible infection or another medical problem. If you feel very unwell or symptoms are severe, seek urgent medical care rather than waiting for a business-hours reply.',
      ] },
      { heading: 'When to seek medical advice', paragraphs: [
        'Seek advice from a doctor if redness spreads, the area becomes increasingly hot or painful, discharge is concerning, swelling worsens or you develop fever. Do not attempt to diagnose an infection from a photo or rely on an online article to determine whether the jewellery should be removed. A clinician can assess your symptoms and advise on treatment.',
        'If you contact the studio, explain when the piercing was done, the location and what has changed. The studio can clarify its procedure or aftercare instructions, but it cannot replace medical care. Keep the appointment information and any written instructions available so you can accurately describe the piercing to a healthcare professional if needed.',
      ] },
      { heading: 'A short aftercare checklist', paragraphs: [
        'Before your appointment ends, make sure you know the cleaning routine, the correct products, when to return with a question, and who to contact if something feels wrong. Confirm the studio’s guidance on jewellery changes, sports, swimming and pressure from clothing. If instructions are unclear, ask for clarification before you leave; it is easier to check than to guess once you are home.',
        'Think through normal routines while the area is new. If your work requires protective equipment, if you wear headphones for long periods, or if you have planned travel or sports, ask how those routines may interact with the location you are considering. The practitioner can explain what they recommend for that specific placement; online advice cannot predict your healing. Mention allergies or prior reactions to jewellery and ask which materials are confirmed available before deciding.',
        'Keep a short record of the appointment date, placement, jewellery details and written care instructions. If you contact the studio or a doctor later, those notes help explain what changed and when. Do not remove jewellery or attempt a home adjustment just to make the area easier to photograph. Share a clear image only if a professional requests it, and consider your privacy before sending it through any channel.',
        `If you are planning piercing in ${siteConfig.city}, include the requested placement and preferred studio in your enquiry. The available placements, jewellery options, appointment rules and age requirements should be confirmed directly. Clear answers help you prepare, follow the appropriate care routine and recognise when a concern belongs with a doctor rather than a studio.`,
      ] },
    ],
  },
  {
    slug: 'telugu-name-script-tattoo-ideas',
    title: 'Telugu Name and Script Tattoo Ideas',
    description: 'Plan Telugu name and script tattoo ideas with careful spelling, script verification, placement and design review in Vijayawada.',
    publishedTime: siteConfig.fixedSitemapDate,
    sections: [
      { heading: 'Start with meaning before lettering', paragraphs: [
        'A name or phrase in Telugu can carry family, cultural or personal meaning. Before thinking about font or placement, write down the exact words and why you want them. Decide whether the tattoo should show a name, a short phrase, a date or a combination. If the phrase comes from a song, prayer, quote or family expression, locate a reliable original source rather than relying on a quick transliteration from an unfamiliar page.',
        'Spelling and character forms deserve special attention because a small change can affect how a word reads. Ask a fluent Telugu speaker to verify the final text, meaning and preferred written form. If several family members use different spellings or pronunciations, discuss that before a design is drawn. This guide does not provide a translation service or certify any Telugu wording.',
      ] },
      { heading: 'Verify the script with a fluent reader', paragraphs: [
        'Do not approve a tattoo based only on a typed message, a machine translation or a reference image found online. Take the intended text to a fluent reader who understands the context, and ask them to check every character, vowel marker, spacing choice and punctuation mark. Read it aloud and ask whether it says exactly what you mean, especially when the phrase is personal or religious.',
        'Save the verified text as a clear reference and share it with the artist. Ask for the proposed design in a readable format before the appointment, then have the same fluent reader review the final artwork rather than an earlier draft. Keep a note of which spelling and style were approved. This extra check is useful even when a phrase looks familiar to you.',
      ] },
      { heading: 'Choose a style that stays readable', paragraphs: [
        'The visual direction can be simple lettering, a fine-line treatment, a bolder wordmark or script paired with a small symbol. The right choice depends on the length of the text, its character shapes, the amount of detail and the space available. A reference font may need adaptation so the wording stays clear at the size and body area you choose. Ask the artist to explain what can be simplified without changing the text.',
        'Avoid shrinking a long phrase solely to fit a very small placement. Ask how spacing and line breaks affect readability and whether the wording should sit on one line or more than one. The artist can discuss visual scale; a native speaker should remain the source for language accuracy. Review every character in the actual proposed design before agreeing to proceed.',
      ] },
      { heading: 'Think about placement and scale', paragraphs: [
        'Placement affects visibility, orientation and the shape of the lettering. Consider who will read the tattoo, whether you want it visible in everyday clothing and how the line may sit on a curved or moving area. Share the approximate dimensions and ask to see a scale mock-up in context. A design that looks balanced on a screen may need different spacing when planned for the body.',
        'If the tattoo includes a name, decide whether you want it paired with a date, small motif or no extra detail. Consider how any additional symbol changes the amount of space required. Pain and healing vary by body area and individual, so ask separate questions about comfort and aftercare rather than choosing a placement based only on a photograph.',
      ] },
      { heading: 'Use references without copying blindly', paragraphs: [
        'Collect examples for lettering weight, overall balance and composition, then explain which qualities you like. A reference can communicate a feeling without being copied exactly. If the sample contains another person’s name or phrase, do not assume it can be replaced character for character; the text length and written shapes may change the layout. Ask for a fresh design suited to your verified wording and chosen placement.',
        'Discuss what happens if a correction is needed before the appointment. Check the text at full size, zoom in to review the marks and make sure you are looking at the final version rather than a draft. A deliberate approval step is more reliable than trying to fix a spelling or spacing question after tattooing has begun.',
      ] },
      { heading: 'Booking a Telugu script tattoo in Vijayawada', paragraphs: [
        `When enquiring in ${siteConfig.city}, send the intended wording, a verified transcription, approximate size, preferred body area, style references and your selected studio. Tell the team whether the phrase still needs language review. Ask about the design process, quote, appointment availability and what preparation is needed. Current rates and appointment terms should come directly from the studio; this article does not estimate them.`,
        'Before you book, verify the final wording with a fluent Telugu speaker and confirm the exact spelling with the artist. Keep the approved version and ask how the final stencil or design will be checked on the day. If anything differs from the version you approved, pause and clarify before proceeding. A meaningful script tattoo deserves a careful process from the first message to final sign-off.',
        'Some people choose a parent’s name, a child’s name, a family word or a short expression they use often; others prefer a date or a phrase connected to a memory. You do not need to decide the surrounding artwork immediately. First settle the exact written text, then explore whether a small mark, frame or plain lettering best supports it. Keep the language review separate from the artistic discussion so each question receives the right kind of attention.',
      ] },
    ],
  },
]

export const serviceKeywords: Record<string, string[]> = {
  'permanent-tattoo': [`tattoo artist in ${siteConfig.city}`, `custom tattoo ${siteConfig.city}`],
  piercing: [`piercing in ${siteConfig.city}`],
  'scar-coverup': [`scar cover up tattoo ${siteConfig.city}`, 'old tattoo cover up'],
  'tattoo-removal': [`tattoo removal in ${siteConfig.city}`],
}

export const studioTravelNotes = Object.fromEntries(
  siteConfig.locations.map((location) => [
    location.slug,
    location.landmark.split(',').map((landmark) => landmark.trim()),
  ])
)
