import React from "react";

import './californiaPrivacyNotice.css';

import logo from '../../assets/logo.svg';

export const CaliforniPrivacyNotice = () => {
    return <div className="california-privacy-notice">

        <div className='flex-center solar'>
            <img alt="" src={logo} />&nbsp;
            <div className='small bold'>Solar Panel Quotes</div>
        </div>
        
        <div className="inner-pages-text">
              <h1>California Privacy Notice</h1>
              <p><strong>Effective Date: January 1, 2020</strong></p>
              <p>
                This California Privacy Notice supplements the information
                contained in our general Privacy Policy and applies solely to
                those visitors and users that are residents of the State of
                California (“consumer” or “you”). uniquote.com (“we”, “us”,
                “our”) adopts this notice to comply with the California Consumer
                Privacy Act of 2018 (“CCPA”), as amended, and other California
                Privacy laws. Any terms defined by the CCPA have the same
                meaning when used in this notice.
              </p>
              <p><strong>Information We Collect</strong></p>
              <p>
                We collect information that identifies, relates to, describes,
                references, is reasonably capable of being associated with, or
                could reasonably be linked, directly or indirectly, with a
                particular consumer or household (“personal information”).
                Personal information does not include publicly available
                information, deidentified information, aggregate information, or
                any information protected by other privacy laws and otherwise
                excluded from the scope of the CCPA.
              </p>
              <p>
                This table identifies the categories of personal information we
                have collected about consumers within the last 12 months:
              </p>
              <table border={1}>
                <tbody className="c-p-n-table">
                  <tr>
                    <td >&nbsp;</td>
                    <td ><strong>Category</strong></td>
                    <td ><strong>Examples</strong></td>
                    <td ><strong>Collected</strong></td>
                  </tr>
                  <tr>
                    <td ><strong>A.</strong></td>
                    <td >Identifiers</td>
                    <td >
                      Real name, alias, postal address, unique personal
                      identifier, online identifier, internet protocol address,
                      email address, account name, social security number,
                      driver’s license number, passport number, or other similar
                      identifiers
                    </td>
                    <td >YES</td>
                  </tr>
                  <tr>
                    <td ><strong>B.</strong></td>
                    <td >
                      Personal information described in the California Customer
                      Records statute (Cal. Civil Code §1798.80(e))
                    </td>
                    <td >
                      <p>
                        A name, signature, social security number, physical
                        characteristics or description, address, telephone
                        number, passport number, driver’s license or state
                        identification card number, insurance policy number,
                        education, employment, employment history, bank account
                        number, credit card number, debit card number, or any
                        other financial information, medical information, or
                        health insurance information.
                      </p>
                      <p>
                        <strong>Note:</strong>&nbsp;Personal information
                        included in this category (1) does not include publicly
                        available information that is lawfully made available to
                        the general public from federal, state, or local
                        government records, and (2) may overlap with other
                        categories.
                      </p>
                    </td>
                    <td >YES</td>
                  </tr>
                  <tr>
                    <td ><strong>C.</strong></td>
                    <td >
                      Protected classification characteristics under California
                      or federal law
                    </td>
                    <td >
                      <p>
                        Age (40 years or older), race, color, ancestry, national
                        origin, citizenship, religion or creed, marital status,
                        medical condition, physical or mental disability, sex
                        (including gender, gender identity, gender expression,
                        pregnancy or childbirth and related medical conditions),
                        sexual orientation, veteran or military status, genetic
                        information (including familial genetic information)
                      </p>
                    </td>
                    <td >
                      <p>YES</p>
                    </td>
                  </tr>
                  <tr>
                    <td ><strong>D.</strong></td>
                    <td >Commercial Information</td>
                    <td >
                      Records of personal property, products or services
                      purchased, obtained, or considered, or other purchasing or
                      consuming histories or tendencies.
                    </td>
                    <td >YES</td>
                  </tr>
                  <tr>
                    <td ><strong>E.</strong></td>
                    <td >Biometric Information</td>
                    <td >
                      Physiological, biological, or behavioral characteristics,
                      including deoxyribonucleic acid (DNA), which can be used,
                      singly or in combination with each other or with other
                      identifying data, to establish individual identity.
                      Includes, but is not limited to, imagery of the iris,
                      retina, fingerprint, face, hand, palm, vein patterns, and
                      voice recordings, from which an identifier template, such
                      as a faceprint, a minutiae template, or a voiceprint, can
                      be extracted, and keystroke patterns or rhythms, gait
                      patterns or rhythms, and sleep, health, or exercise data
                      that contain identifying information.
                    </td>
                    <td >NO</td>
                  </tr>
                  <tr>
                    <td ><strong>F.</strong></td>
                    <td >
                      Internet or other electronic network activity information
                    </td>
                    <td >
                      Browsing history, search history, information on a
                      consumer’s interaction with a website, application, or
                      advertisement
                    </td>
                    <td >YES</td>
                  </tr>
                  <tr>
                    <td ><strong>G.</strong></td>
                    <td >Geolocation data</td>
                    <td >
                      Physical location or movements
                    </td>
                    <td >YES</td>
                  </tr>
                  <tr>
                    <td ><strong>H.</strong></td>
                    <td >
                      Audio, electronic, visual, thermal, olfactory, or similar
                      information
                    </td>
                    <td >
                      Electronic recording of customer or prospective customer
                      calls.
                    </td>
                    <td >YES</td>
                  </tr>
                  <tr>
                    <td ><strong>I.</strong></td>
                    <td >
                      Professional or employment-related information
                    </td>
                    <td >
                      Current and prior job and salary history or performance
                      evaluations.
                    </td>
                    <td >NO</td>
                  </tr>
                  <tr>
                    <td ><strong>J.</strong></td>
                    <td >
                      Education information that is not publicly available
                      personally identifiable information as defined in the
                      Family Educational Rights and Privacy Act (20 U.S.C.
                      section 1232g, 34 C.F.R. Part 99).
                    </td>
                    <td >
                      Education records directly related to a student maintained
                      by an educational institution or party acting on its
                      behalf, such as grades, transcripts, class lists, student
                      schedules, student identification codes, student financial
                      information, or student disciplinary records.
                    </td>
                    <td >NO</td>
                  </tr>
                  <tr>
                    <td ><strong>K.</strong></td>
                    <td >
                      Inferences drawn from any other category of personal
                      information
                    </td>
                    <td >
                      Deriving information, data, assumptions, or conclusions
                      from facts, evidence, or another source of information or
                      data to create a profile reflecting a person’s
                      preferences, characteristics, psychological trends,
                      predispositions, behavior, attitudes, intelligence,
                      abilities, and aptitudes.
                    </td>
                    <td >YES</td>
                  </tr>
                </tbody>
              </table>
              <p><strong>Personal information does not include:</strong></p>
              <ul>
                <li>
                  Publicly available information, which for purposes of the
                  CCPA:
                  <ul>
                    <li>
                      means information that is lawfully made available from
                      federal, state or local government records.
                    </li>
                    <li>
                      does not mean biometric information collected by a
                      business about a consumer without the consumer’s
                      knowledge.
                    </li>
                    <li>
                      does not include data used for a purpose that is not
                      compatible with the purpose for which the data is
                      maintained and made available in the government records or
                      for which it is publicly maintained.
                    </li>
                    <li>
                      does not include consumer information that is
                      de-identified or aggregate consumer information.
                    </li>
                  </ul>
                </li>
                <li>
                  Information excluded from the CCPA’s scope, like:
                  <ul>
                    <li>
                      Medical information governed by the California
                      Confidentiality of Medical Information Act (CMIA);
                      protected health information covered by the Health
                      Insurance Portability and Accountability Act of 1996
                      (HIPAA) and the Health Information Technology for Economic
                      and Clinical Health Act (HITECH); and information
                      collected as part of a clinical trial subject to the
                      Federal Policy for the Protection of Human Subjects.
                    </li>
                    <li>
                      Personal information covered by certain sector-specific
                      privacy laws, including the federal Fair Credit Reporting
                      Act (FCRA), the federal Gramm-Leach-Bliley Act (GLBA), the
                      California Financial Information Privacy Act (FIPA), and
                      the Driver’s Privacy Protection Act of 1994 (DPPA).
                    </li>
                  </ul>
                </li>
              </ul>
              <p><strong>How we Collect Personal Information</strong></p>
              <p>
                We obtain the personal information listed above from the
                following sources:
              </p>
              <ul>
                <li>
                  Directly from you. For example, from forms you complete on our
                  Website.
                </li>
                <li>
                  Indirectly from you. For example, from observing your actions
                  on our Website via automatic data collection technologies.
                </li>
                <li>
                  From third parties. For example, from our affiliates and other
                  third parties that send us leads.
                </li>
              </ul>
              <p><strong>How We Use Your Information</strong></p>
              <p>
                We may use or disclose the personal information we collect for
                one or more of the following business or commercial purposes:
              </p>
              <ul>
                <li>
                  To fulfill or meet the reason you provided the information;
                </li>
                <li>
                  To provide, support, personalize, and develop our Website,
                  products, and services;
                </li>
                <li>
                  To create, maintain, customize, and secure your account with
                  us, when applicable;
                </li>
                <li>
                  To provide you with support and to respond to your inquiries,
                  including to investigate and address your concerns and monitor
                  and improve our responses;
                </li>
                <li>
                  To personalize your Website experience and to deliver content
                  and product and service offerings relevant to your interests,
                  including targeted offers and ads through our Website,
                  third-party sites, and via email or text message (with your
                  consent, where required by law);
                </li>
                <li>
                  To help maintain the safety, security, and integrity of our
                  Website, products and services, databases and other technology
                  assets, and business;
                </li>
                <li>
                  For testing, research, analysis, and product development,
                  including to develop and improve our Website, products, and
                  services;
                </li>
                <li>
                  To respond to law enforcement requests and as required by
                  applicable law, court order, or governmental regulations;
                </li>
                <li>
                  As described to you when collecting your personal information
                  or as otherwise set forth in the CCPA
                </li>
              </ul>
              <p><strong>Sharing Personal Information</strong></p>
              <p>
                We may disclose your personal information for a business purpose
                to third parties, such as our subsidiaries and affiliates, as
                well as non-affiliated third-parties with whom we partner to
                offer products and services to you.
              </p>
              <p>
                In the preceding 12 months, we have disclosed the following
                categories of personal information for a business purpose to the
                third parties identified above:
              </p>
              <ul>
                <li>Category A: Identifiers</li>
                <li>
                  Category B: Personal information described in the California
                  Customer Records statute (Cal. Civil Code §1798.80(e))
                </li>
                <li>Category D: Commercial information</li>
                <li>Category F: Internet or other similar network activity</li>
                <li>Category G: Geolocation data</li>
                <li>
                  Category H: Audio, electronic, visual, thermal, olfactory, or
                  similar information
                </li>
                <li>
                  Category K: Inferences drawn from any other category of
                  personal information
                </li>
              </ul>
              <p><strong>Sale of Personal Information</strong></p>
              <p>
                We may disclose certain information about you to consumer data
                resellers, advertising partners, affiliates, and other third
                parties for purposes that may be considered a “sale” under the
                CCPA. In the preceding 12 months, we have sold the following
                categories of personal information to third parties:
              </p>
              <ul>
                <li>Category A: Identifiers</li>
                <li>
                  Category B: Personal information described in the California
                  Customer Records statute (Cal. Civil Code §1798.80(e))
                </li>
                <li>Category D: Commercial information</li>
                <li>Category F: Internet or other similar network activity</li>
                <li>Category G: Geolocation data</li>
                <li>
                  Category H: Audio, electronic, visual, thermal, olfactory, or
                  similar information
                </li>
                <li>
                  Category K: Inferences drawn from any other category of
                  personal information
                </li>
              </ul>
              <p><strong>Your California Privacy Rights and Choices</strong></p>
              <p>
                If you are a California resident, the CCPA provides you with
                additional rights regarding our use of your personal
                information. This section describes your CCPA rights and
                explains how to exercise those rights.
              </p>
              <p><strong>(1) Right to Access Your Information</strong></p>
              <p>
                You have the right to request that we disclose certain
                information to you about our collection and use of your personal
                information during the 12-month period preceding your request.
                Once we receive and verify your request, we will disclose to you
                the information that you request and we are obligated to provide
                under the CCPA, which may include:
              </p>
              <ul>
                <li>
                  The categories of personal information we have collected about
                  you;
                </li>
                <li>
                  The categories of sources from which we collected your
                  personal information;
                </li>
                <li>
                  Our business or commercial purpose for collecting or selling
                  your personal information;
                </li>
                <li>
                  The categories of personal information we have disclosed for a
                  business purpose or sold about you;
                </li>
                <li>
                  The categories of third parties with whom we share or sell
                  your personal information; and
                </li>
                <li>
                  The specific pieces of personal information we have collected
                  about you.
                </li>
              </ul>
              <p><strong>(2) Right to Request Deletion</strong></p>
              <p>
                You have the right to request that we delete some or all of the
                personal information that we have collected from you, subject to
                certain exceptions. Once we receive and verify your request, we
                will delete (and direct our service providers to whom we have
                furnished that information to also delete) your personal
                information from our (and their) records. With respect to the
                exceptions, we may deny your deletion request in whole or in
                part if retaining your personal information is necessary for us
                or our service providers to:
              </p>
              <ul>
                <li>
                  Complete the transaction for which we collected the personal
                  information, provide a good or service that you requested,
                  take actions reasonably anticipated within the context of our
                  ongoing business relationship with you, or otherwise perform
                  our contract with you;
                </li>
                <li>
                  Detect security incidents, protect against malicious,
                  deceptive, fraudulent, or illegal activity, or prosecute those
                  responsible for such activities;
                </li>
                <li>
                  Debug products to identify and repair errors that impair
                  existing intended functionality.
                </li>
                <li>
                  Exercise free speech, ensure the right of another consumer to
                  exercise their free speech rights, or exercise another right
                  provided for by law;
                </li>
                <li>
                  Comply with the California Electronic Communications Privacy
                  Act;
                </li>
                <li>
                  Engage in public or peer-reviewed scientific, historical, or
                  statistical research in the public interest that adheres to
                  all other applicable ethics and privacy laws, when the
                  information’s deletion may likely render impossible or
                  seriously impair the research’s achievement, if you previously
                  provided informed consent;
                </li>
                <li>
                  Enable solely internal uses that are reasonably aligned with
                  your expectations based on your relationship with us;
                </li>
                <li>Comply with a legal obligation; or</li>
                <li>
                  Make other internal and lawful uses of that information that
                  are compatible with the context in which you provided it.
                </li>
              </ul>
              <p><strong>(3) Right to Opt-Out</strong></p>
              <p>
                You have the right to direct us not to sell your personal
                information to third parties. Any personal information about you
                that we sell to a third party cannot be sold by that third party
                unless you have received explicit notice and are provided with
                an opportunity to opt-out of the sale of your personal
                information.
              </p>
              <p>
                You (or your authorized representative) may submit your request
                to opt-out by using the form available on this page.
              </p>
              <p>
                <strong>Exercising Access, Data Portability, and Deletion
                  Rights</strong>
              </p>
              <p>
                To exercise the access, data portability, deletion and opt-out
                rights described above, please submit a verifiable consumer
                request to us by either:
              </p>
              <ul>
                <li>Using the form available on this page</li>
                <li>Emailing us compliance@uniquote.com</li>
              </ul>
              <p>
                Only you or a person registered with the California Secretary of
                State that you authorize to act on your behalf, may make a
                verifiable consumer request related to your personal
                information. You may also make a verifiable consumer request on
                behalf of your minor child.
              </p>
              <p>
                You may only make a verifiable consumer request for access or
                data portability twice within a 12-month period. The verifiable
                consumer request must:
              </p>
              <ul>
                <li>
                  Provide sufficient information that allows us to reasonably
                  verify you are the person about whom we collected personal
                  information or an authorized representative. This includes
                  your or the consumer’s:
                  <ul>
                    <li>Name</li>
                    <li>Address</li>
                    <li>Email</li>
                    <li>Current Mailing Address</li>
                    <li>Alternate Phone</li>
                    <li>Alternate Mailing Address</li>
                    <li>
                      Other personal information about you maintained by us.
                    </li>
                  </ul>
                </li>
                <li>
                  Describe your request with sufficient detail that allows us to
                  properly understand, evaluate, and respond to it.
                </li>
              </ul>
              <p>
                Generally, we will not request additional information from you
                for purposes of verification. If, however, we cannot verify you
                identity from the information already maintained by us, we may
                request additional information from you, which shall only be
                used for the purposes of verifying you identity and seeking to
                exercise you rights under the CCPA, and for security or
                fraud-prevention purposes. We will delete any new personal
                information collected for the purposes of verification as soon
                as practical after processing your request, except as required
                to comply with the CCPA.
              </p>
              <p>
                We cannot respond to your request or provide you with personal
                information if we cannot verify your identity or authority to
                make the request and confirm the personal information relates to
                you. Making a verifiable consumer request does not require you
                to create an account with us. We may require authentication that
                is reasonable in light of the nature of the personal information
                requested and will only use personal information provided in a
                verifiable consumer request to verify the requestor’s identity
                or authority to make the request.
              </p>
              <p>
                Please note that we may continue to share your personal
                information with our affiliates and service providers for
                essential purposes described above and other such circumstances
                allowed under the CCPA. Opting out of the sale of personal
                information through the “Do Not Sell My Personal information”
                link does not mean that you will stop seeing ads, including some
                interest-based ads. To learn more about interest-based
                advertising across sites and additional opt-out choices, please
                see our general Privacy Policy.
              </p>
              <p><strong>Use of an Authorized Agent</strong></p>
              <p>
                If you use an authorized agent to submit a request to know or a
                request to delete, we may require that you provide the
                authorized agent written permission and require the authorized
                agent to verify its own identity with us.
              </p>
              <p>
                A power of attorney to your authorized agent is an acceptable
                form of authorization.
              </p>
              <p>
                We may deny a request from an agent that does not submit proof
                that they have been authorized by you to act on your behalf.
              </p>
              <p><strong>How we Verify your Request</strong></p>
              <p>
                When you submit a request to delete, or a request to know, we
                verify your request by taking the following steps:
              </p>
              <ul>
                <li>
                  We may match the information you provided in your request with
                  the personal information of the consumer already maintained by
                  us; or
                </li>
                <li>
                  We may use a third-party identity verification service that
                  complies with the CCPA;
                </li>
              </ul>
              <p>
                When verifying a request, we consider the following factors:
              </p>
              <ul>
                <li>
                  The type, sensitivity, and value of the personal information
                  collected and maintained about you;
                </li>
                <li>
                  The risk of harm to you posed by any unauthorized access or
                  deletion;
                </li>
                <li>
                  The likelihood that fraudulent or malicious actors would seek
                  the personal information;
                </li>
                <li>
                  Whether the personal information to be provided by you to
                  verify your identity is sufficiently robust to protect against
                  fraudulent requests or being spoofed or fabricated;
                </li>
                <li>The manner in which we interact with you; and</li>
                <li>The technology available for verification.</li>
              </ul>
              <p>
                When you request to know categories of personal information, we
                verify your identity to a reasonable degree of certainty.
              </p>
              <p>
                When you request to delete, we verify your identity to a
                reasonable degree or a reasonably high degree of certainty
                depending on the sensitivity of the personal information and the
                risk of harm to you posed by unauthorized deletion.
              </p>
              <p>
                In all cases, we verify by matching the identifying information
                provided with the request to the personal information of the
                consumer already maintained by us.
              </p>
              <p><strong>Response Timing and Format</strong></p>
              <p>
                Upon receiving a request to know or a request to delete, we will
                confirm receipt of the request within 15 days and provide
                information about how we will process the request.
              </p>
              <p>
                We strive to respond to a verifiable consumer request within 45
                days of its receipt. If we require more time (up to 90 days), we
                will inform you of the reason and extension period in writing.
                We will deliver our written response by mail or electronically,
                at your option.
              </p>
              <p>
                Any disclosures we provide will only cover the 12-month period
                preceding the receipt of the verifiable consumer request. The
                response we provide will also explain the reasons we cannot
                comply with a request, if applicable. For these requests, we
                will select a format to provide your personal information that
                is readily useable and should allow you to transmit the
                information from one entity to another entity without hindrance.
              </p>
              <p>
                We do not charge a fee to process or respond to your verifiable
                consumer request unless it is excessive, repetitive, or
                manifestly unfounded. If we determine that the request warrants
                a fee, we will tell you why we made that decision and provide
                you with a cost estimate before completing your request.
              </p>
              <p><strong>(4) Right to Non-Discrimination</strong></p>
              <p>
                We will not discriminate against you for exercising any of your
                rights under the CCPA. For example, we will not:
              </p>
              <ul>
                <li>Deny you goods or services.</li>
                <li>
                  Charge you different prices or rates for goods or services,
                  including through the use of discounts or other benefits, or
                  imposing penalties.
                </li>
                <li>
                  Provide you a different level or quality of goods or services.
                </li>
                <li>
                  Suggest that you will receive a different price or rate for
                  goods or services or a different level or quality of goods or
                  services.
                </li>
              </ul>
              <p>
                Please know that we may charge you a different price or rate or
                provide a different level or quality of goods or services, if
                that difference is reasonably related to the value provided to
                you by your personal information.
              </p>
              <p><strong>Changes to Our Privacy Notice</strong></p>
              <p>
                We reserve the right to amend this privacy notice at our
                discretion and at any time. When we make changes to this privacy
                notice (which will be updated at least once every 12 months), we
                will notify you through a notice on this page:&nbsp; Privacy
                Policy.
              </p>
              <p><strong>Contact Information</strong></p>
              <p>
                If you have any questions or comments about this notice, our
                Privacy Policy, the ways in which we collect and use your
                personal information, your choices and rights regarding such
                use, or wish to exercise your rights under California law,
                please do not hesitate to contact us at:
              </p>
              <p><strong>Email:</strong>&nbsp;compliance@uniquote.com</p>
              <p>
                <strong>Postal Address:</strong>&nbsp;Eruptic, Inc, 44 Wall
                Street, Suite 505, New York, NY 10005, USA
              </p>
            </div>

    </div>
}