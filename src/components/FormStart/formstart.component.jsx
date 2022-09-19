import {React, useState} from 'react';
import rating5s from '../../assets/rating5s.png';
import trustpilot from '../../assets/trustpilot.png';
import { Form } from '../Form/form.component';
import { PreForm } from '../PreForm/preform.component';
import { ReviewCard } from '../ReviewCard/reviewcard.component';


export const FormStart = ({setCusAdd, setFormSubmited, setName}) => {

    const [showForm, setShowForm] = useState(false);

    return(
        <div>
            <div className='stepform flex-center'>
                {showForm? <Form setCusAdd={setCusAdd} setFormSubmited={setFormSubmited} setName={setName} /> : <PreForm showForm={showForm} setShowForm={setShowForm} />}
            </div>

            <div className='review flex-center-col'>
                <div className='heading flex-center-col'>
                <span className='orange xxsmall'>
                    OUR CUSTOMERS SAY
                </span>

                <span className='bold media-font-22 large'>
                    What they're saying?
                </span>

                <span className='grey width-80 center media-font-14 lorem small'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis tellus eu turpis sit eget mattis urna.
                </span>
                </div>

                <div className='rating media-flex-center-col flex-speven'>

                    <span className='dark-grey medium media-font-22 bold'>Excellent</span>

                    <img src={rating5s} />

                    <span className='dark-grey media- small'>Based on 786 reviews</span>

                    <div>
                        <img src={trustpilot} />
                    </div>
                
                </div>

                <div className='cus-reviews'>

                <ReviewCard head="They were so helpful and patient" content="Sheryl was so helpful and patient as she helped me navigate medicare plan options and find what is best." name="Maurice C." />

                <ReviewCard head="Matt Gardner was knowledgeable" content="Matt Gardner was knowledgeable about the medicare marketplace and current insurance companies and 2022 plans. He was very helpful getting us the right policy to fit our needs and at the right price." name="Donna L." />

                <ReviewCard head="Great Insurance Agent" content="I talked with a young man named Edis K. to finish my medicare sign-up process. He was amazing to work with on the phone. He walked me through stuff and spelled things out very clearly. He got me set up with just what I wanted: dental, vision and healthcare. Great guy!! Thanks again!" name="Donna L." />

                </div>

            </div>
        </div>
    )
}