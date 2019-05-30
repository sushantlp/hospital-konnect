import React from "react";

import Header from "../headerComponent/header";
import Footer from "../footerComponent/footer";

import "./privacy.css";

const PrivacyComponent = () => (
  <React.Fragment>
    <Header />
    <div className="privacy">
      <section class="section">
        <div class="container">
          <p class="title is-2">Privacy Policy</p>

          <p class="subtitle is-6">
            By using our website you consent to the collection, processing and
            use of data as described below. Our website can be visited without
            registration. This data such as pages called or name of the
            retrieved file, date and time are stored on the server for
            statistical purposes, without this data are directly related to your
            person. Personal data, in particular name, address or e-mail address
            are collected as far as possible on a voluntary basis. Without your
            consent, the data will not be passed on to third parties.
          </p>

          <hr className="spacer is-2" />

          <p class="title is-4">Contacting Us</p>
          <p class="subtitle is-6">
            If you contact us by means of a form on the website or by e-mail,
            your data will be stored for a period of 12 months in order to
            process the request and in case of follow-up questions. We will not
            share this information without your consent.
          </p>

          <hr className="spacer is-2" />

          <p class="title is-4">Cookies</p>
          <p class="subtitle is-6">
            Our website uses so-called cookies. These are small text files that
            are stored on your device using the browser and do net present any
            harm. We use cookies to make our offer user-friendly. Some cookies
            remain stored on your device until you delete them. They allow us to
            recognize your browser on your next visit. If you object to this,
            you can set up your browser so that it informs you about the setting
            of cookies and you allow this only in individual cases. Disabling
            cookies may limit the functionality of our website.
          </p>

          <hr className="spacer is-2" />

          <p class="title is-4">Google Analytics</p>
          <p class="subtitle is-6">
            Our website uses Google Analytics, a web analytics service provided
            by Google Inc., 1600 Amphitheater Parkway, Mountain View, CA 94043,
            USA. To disable Google Analytiscs, Google will provide a browser
            plug-in at http://tools.google.com/dlpage/gaoptout?hl=en. Google
            Analytics uses cookies. These are small text files that make it
            possible to store specific user-related information on the user's
            device. These allow an analysis of the use of our website offer by
            Google. The information collected by the cookie about the use of our
            pages (including your IP address) is usually transmitted to a Google
            server in the USA and stored there. We point out that on this
            website Google Analytics has been extended by the code
            "gat._anonymizeIp ();" in order to ensure an anonymous collection of
            IP addresses (so-called IP-Masking). If the anonymization is active,
            Google truncates IP addresses within member states of the European
            Union or in other contracting states of the Agreement on the
            European Economic Area, and therefore no identification of your
            identity is possible. Only in exceptional cases will the full IP
            address be sent to a Google server in the US and shortened there.
            Google complies with the privacy policy of the Privacy Shield
            Agreement, and is registered with the Department of Commerce's
            Privacy Shield Program, and uses the information we collect to
            evaluate the use of our Web sites, to report on them, and other
            related services to us to provide. Learn more at
          </p>

          <hr className="spacer is-2" />

          <p class="title is-4">Newsletter</p>
          <p class="subtitle is-6">
            You have the opportunity to subscribe to our newsletter via our
            website. For this we need your e-mail address and your consent that
            you agree with the subscription to the newsletter. You can cancel
            the subscription to the newsletter at any time. Click on the
            "unsubscribe" link in the newsletter-mailing or send your
            cancellation to the following e-mail address:
            studio@littlelightsstudio.com / support@getbedtimestories.com. We
            will immediately delete your data in connection with the newsletter
            dispatch.
          </p>
        </div>
      </section>
    </div>
    <Footer />
  </React.Fragment>
);

export default PrivacyComponent;
