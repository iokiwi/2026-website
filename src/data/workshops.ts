export interface Workshop {
  location: string;
  date: string;
  description: string;
  time?: string;
  rsvpUrl?: string;
}

export const workshops: Workshop[] = [
  {
    location: "Online",
    date: "19 February",
    time: "6pm - 7pm AEDT",
    description: "Hosted by PyCon AU and friends. Join us online for a hands-on remote workshop."
  },
  {
    location: "Sydney",
    date: "26 February",
    description: "Hosted by **Sydney Python Community**."
  },
  {
    location: "Canberra",
    date: "TBA Early March",
    description: "With the **Canberra Python User Group** hosted at ANU."
  },
  {
    location: "Melbourne",
    date: "TBA Mid March",
    description: "Details to be announced soon."
  },
  {
    location: "Online",
    date: "TBA Mid March",
    description: "Hosted by PyCon AU and friends. Join us online for a hands-on remote workshop."
  },
  {
    location: "Brisbane",
    date: "26 March",
    description: "Hosted by the local **Brisbane Python** community."
  },
];
