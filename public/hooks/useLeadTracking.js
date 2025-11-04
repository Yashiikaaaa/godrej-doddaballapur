// import { useCallback } from "react";
// import ReactGA from "react-ga4";

// // Utility: Get UTM params from current URL
// const getUTMParams = () => {
//   if (typeof window === "undefined") return {};
//   const urlParams = new URLSearchParams(window.location.search);

//   const getParam = (keys) => {
//     for (const key of keys) {
//       const val = urlParams.get(key);
//       if (val) return val;
//     }
//     return null;
//   };

//   return {
//     utm_source: getParam(["utm_source", "utmSource"]),
//     utm_medium: getParam(["utm_medium", "utmMedium"]),
//     utm_campaign: getParam(["utm_campaign", "utmCampaign"]),
//     utm_campaign: getParam(["utm_keyword", "utmKeyword"]),
//     utm_term: getParam(["utm_term", "utmTerm"]),
//     utm_content: getParam(["utm_content", "utmContent"]),
//   };
// };


// export const useLeadTracking = () => {
//   const utmParams = getUTMParams();

//   const trackButtonClick = useCallback(
//     (source, action, label, propertyType = null) => {
//       ReactGA.gtag("event", action, {
//         event_category: "Button Click",
//         event_label: `${source}${propertyType ? ` - ${propertyType}` : ""}`,
//         lead_source: source,
//         property_type: propertyType,
//         funnel_stage: "interest",
//         ...utmParams,
//       });
//     },
//     [utmParams]
//   );

//   const trackFormSubmission = useCallback(
//     (source, formType, propertyType = null) => {
//       ReactGA.gtag("event", `${formType}_submit`, {
//         event_category: "Form Submission",
//         event_label: `${source}${propertyType ? ` - ${propertyType}` : ""}`,
//         lead_source: source,
//         property_type: propertyType,
//         funnel_stage:
//           formType === "contact_form" ? "lead" : "site_visit_request",
//         ...utmParams,
//       });
//     },
//     [utmParams]
//   );

//   const trackFormOpen = useCallback(
//     (source, formType, propertyType = null) => {
//       const normalize = (str) =>
//         (str || "")
//           .toLowerCase()
//           .replace(/[_\s]+/g, "")
//           .trim();

//       ReactGA.gtag("event", `${formType}_opened`, {
//         event_category: "Form Interaction",
//         event_label:
//           propertyType && !normalize(source).includes(normalize(propertyType))
//             ? `${source} - ${propertyType}`
//             : source,
//         lead_source: source,
//         property_type: propertyType,
//         funnel_stage: "consideration",
//         ...utmParams,
//       });
//     },
//     [utmParams]
//   );

//   return {
//     trackButtonClick,
//     trackFormSubmission,
//     trackFormOpen,
//   };
// };

// // Lead source constants
// export const LEAD_SOURCES = {
//   HERO: "hero_banner",
//   OVERVIEW: "overview_section",
//   PRICING_1200sqft: "pricing_1200sqft",
//   PRICING_1500sqft: "pricing_1500sqft",
//   PRICING_2000sqft: "pricing_2000sqft",
//   PRICING_2400sqft: "pricing_2400sqft",
//   PRICING_4000sqft: "pricing_4000sqft",
//   MASTER_PLAN: "master_plan_section",
//   FOOTER: "footer_section",
//   CONTACT_FORM_LINK: "contact_form_internal_link",
//   UNKNOWN: "unknown_source",
// };

// // Property types
// export const PROPERTY_TYPES = {
//   sqft1200: "1200sqft",
//   sqft1500: "1500sqft",
//   sqft2000: "2000sqft",
//   sqft2400: "2400sqft",
//   sqft4000: "4000sqft"
// };


import { useState, useCallback } from "react";
import ReactGA from "react-ga4";

// Utility: Get UTM params from current URL
const getUTMParams = () => {
  if (typeof window === "undefined") return {};
  const urlParams = new URLSearchParams(window.location.search);

  const getParam = (keys) => {
    for (const key of keys) {
      const val = urlParams.get(key);
      if (val) return val;
    }
    return null;
  };

  return {
    utm_source: getParam(["utm_source", "utmSource"]),
    utm_medium: getParam(["utm_medium", "utmMedium"]),
    utm_campaign: getParam(["utm_campaign", "utmCampaign"]),
    utm_campaign: getParam(["utm_keyword", "utmKeyword"]),
    utm_term: getParam(["utm_term", "utmTerm"]),
    utm_content: getParam(["utm_content", "utmContent"]),
  };
};

// Lead source constants
export const LEAD_SOURCES = {
  HERO: "hero_banner",
  OVERVIEW: "overview_section",
  PRICING_1200sqft: "pricing_1200sqft",
  PRICING_1500sqft: "pricing_1500sqft",
  PRICING_2000sqft: "pricing_2000sqft",
  PRICING_2400sqft: "pricing_2400sqft",
  PRICING_4000sqft: "pricing_4000sqft",
  MASTER_PLAN: "master_plan_section",
  FOOTER: "footer_section",
  CONTACT_FORM_LINK: "contact_form_internal_link",
  UNKNOWN: "unknown_source",
};

// Property types
export const PROPERTY_TYPES = {
  sqft1200: "1200sqft",
  sqft1500: "1500sqft",
  sqft2000: "2000sqft",
  sqft2400: "2400sqft",
  sqft4000: "4000sqft"
};

export const useLeadTracking = () => {
  const utmParams = getUTMParams();

  const trackButtonClick = useCallback(
    (source, action, label, propertyType = null) => {
      ReactGA.gtag("event", action, {
        event_category: "Button Click",
        event_label: `${source}${propertyType ? ` - ${propertyType}` : ""}`,
        lead_source: source,
        property_type: propertyType,
        funnel_stage: "interest",
        ...utmParams,
      });
    },
    [utmParams]
  );

  const trackFormSubmission = useCallback(
    (source, formType, propertyType = null) => {
      ReactGA.gtag("event", `${formType}_submit`, {
        event_category: "Form Submission",
        event_label: `${source}${propertyType ? ` - ${propertyType}` : ""}`,
        lead_source: source,
        property_type: propertyType,
        funnel_stage:
          formType === "contact_form" ? "lead" : "site_visit_request",
        ...utmParams,
      });
    },
    [utmParams]
  );

  const trackFormOpen = useCallback(
    (source, formType, propertyType = null) => {
      const normalize = (str) =>
        (str || "")
          .toLowerCase()
          .replace(/[_\s]+/g, "")
          .trim();

      ReactGA.gtag("event", `${formType}_opened`, {
        event_category: "Form Interaction",
        event_label:
          propertyType && !normalize(source).includes(normalize(propertyType))
            ? `${source} - ${propertyType}`
            : source,
        lead_source: source,
        property_type: propertyType,
        funnel_stage: "consideration",
        ...utmParams,
      });
    },
    [utmParams]
  );

  return {
    trackButtonClick,
    trackFormSubmission,
    trackFormOpen,
  };
};

const ContactFormButton = () => {
  const { trackFormOpen } = useLeadTracking();
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Handle the opening of the form
  const handleFormOpen = () => {
    setIsFormOpen(true); // Open the form
    trackFormOpen(LEAD_SOURCES.CONTACT_FORM_LINK, "contact_form"); // Track the form open event
  };

  // Handle form submission
  const handleFormSubmit = () => {
    trackFormSubmission(LEAD_SOURCES.CONTACT_FORM_LINK, "contact_form"); // Track form submission event
    // Logic for form submission (e.g., sending data to server)
    console.log("Form submitted!");
    setIsFormOpen(false); // Close the form after submission
  };

  // Handle form close
  const handleFormClose = () => {
    setIsFormOpen(false); // Close the form
  };

  return (
    <div>
      <button onClick={handleFormOpen}>Open Contact Form</button>

      {isFormOpen && (
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form>
            {/* Form fields go here */}
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
            <button type="button" onClick={handleFormClose}>
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactFormButton;
