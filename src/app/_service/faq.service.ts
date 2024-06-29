import { Injectable } from '@angular/core';
import { Faq } from '../_models/faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  faqs: Faq[] = [

    {
      "question": "What is Domiciliary Care/Support?",
      "response": "Domiciliary Care/Support, also known as homecare or home support, is the delivery of a range of personal care and support services to Service Users in their own homes. The Care/Support delivered can range from a 15 minute visit to ensure that the Service User has taken prescribed medication, for example, through to 24 hour Support. While Domiciliary Care/Support generally refers to care delivered in the home, Support Workers employed by domiciliary care/support agencies may also undertake duties outside a Service User’s home. These duties may include providing an escort for a Service User attending a hospital appointment or social event or shopping on behalf of, or with, a Service User. Domiciliary Care/Support should promote and develop the independence of Service Users by encouraging individuals to do as much as possible for themselves and take part in social activities."
    },
    {
      "question": "How do I choose the best Domiciliary Care/Support Agency for my needs?",
      "response": "Domiciliary Care/Support Agencies are inspected, monitored and regulated by the Care Quality Commission. If you go onto their website and put in the name of the Domiciliary Care/Support Agency you are considering and read the most recent inspection report this will give you an idea of how that agency is rated. Read the various websites carefully and make sure that the support you require is available from a Domiciliary Care/Support Agency. Check the contact details and speak to someone in the agency’s office. Finally, look at the testimonial page and see what other Service Users have to say about the support they have received from that Domiciliary Care/Support Agency."
    },
    {
      "question": "My relative needs a little extra help but I’m not sure exactly what they need?",
      "response": "When you contact CTRC, a member of our management team will arrange to come and have a chat to assess your needs and suggest the appropriate level of support or, if Social Services are funding the Care package, a Social Worker will decide how much support you require."
    },
    {
      "question": "Can the support worker take me?",
      "response": "Yes. Accessing the local community is a vital service we provide to many Service Users."
    },
    {
      "question": "How quickly can support be provided?",
      "response": "CTRC aims to have Care/Support Plan in place within 48 hours of the initial enquiry. However, we are able to reduce this time in an emergency. Before we offer Support, we must carry out an ‘Assessment of Need’. This is a legal requirement, so that we understand your needs or your relative’s needs and can put in a Support Worker/Carer who can meet those needs. CTRC also needs to do a Risk Assessment that is also a requirement before we place a Support Worker with you."
    },
    {
      "question": "Will I still receive care on Bank Holidays?",
      "response": "Yes. CTRC provides care/support 365 days a year."
    },
    {
      "question": "My current provider is always sending me different carers, would you be different?",
      "response": "Yes CTRC is different. You will have a primary Support Worker/Carer who will be supported by 2 others so we can ensure continuity of support."
    },
    {
      "question": "I want to go on holiday – can I put my care on hold for a period of time?",
      "response": "Yes you can. Simply call the CTRC office so we can arrange accordingly. We do ask that you give us a minimum of one week’s notice of any change in your provision of Care/Support. If you want a Supported Holiday, CTRC can take care of all the arrangements for you."
    },
    {
      "question": "What if I need to speak to somebody when the office is closed?",
      "response": "CTRC has a dedicated Out Of Hours “On Call” number that can be contacted in case of an emergency."
    },
    {
      "question": "I have a pet – is that a problem?",
      "response": "No, having a pet is not a problem. A CTRC Care Manager will meet your pet during the assessment visit and find out how your pet responds to visitors. Some of our Support Workers are afraid of, or allergic to, cats and dogs. It is good for us to know in advance what your pet is so that we do not place a Support Worker with you who has problems with animals."
    },
    {
      "question": "What if I need more or less support in the future?",
      "response": "CTRC regularly monitors the Support/Care we give and we can increase or decrease the amount of support given at any time to suit your assessed needs."
    },
    {
      "question": "If I need to change my booked call, how much notice do you need?",
      "response": "24 hours if possible but always call if there is a problem and we can work around it."
    },
    {
      "question": "Would you be able to provide a Care Worker who speaks my language?",
      "response": "We have many Care/Support Workers who are able to speak a number of different languages in addition to English. CTRC Support Workers come from diverse cultures and backgrounds. At the Assessment, please inform us if your first/preferred language is not English, so that we can, where possible, arrange a Care/Support Worker for you who is able to communicate with you in your own language. Our diverse mix of staff has proved an invaluable resource in helping overcome cultural and language barriers."
    },
    {
      "question": "Why should I choose your agency?",
      "response": "CTRC strives to be the best in its field. We are rigorous in the vetting of our Support/Care Workers: all mandatory checks are carried out to make sure that our Support/Care Workers are the best we can find. They are trained to a high level and supervised during their work or with one-to-one appraisal and supervision interviews. All complaints are investigated. If a Service User is unhappy with a Support/Care Worker, we will change that person. We do understand that having a stranger in your home can be daunting and more so if you are vulnerable, we do our utmost to choose the right person to support you."
    }

  ];

  getFaqs() {
    return this.faqs;
  }
}
