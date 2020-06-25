// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    const listMeeting = {
        count: 24,
        meetings: [
            {
                name: "New project about selling",
                description: "I would like to send the presentation we've discussed today. You...",
                viewCount: 22,
                minutes: 34,
                duration: "4:00 PM - 5:00 PM"
            },
            {
                name: "Meeting name",
                description: "I would like to send the presentation we've discussed today. You may find it be... ",
                viewCount: 4,
                minutes: 6,
                duration: "1:00 PM - 2:00 PM"
            },
            {
                name: "New project about selling",
                description: "I would like to send the presentation we've discussed today. You...",
                viewCount: 23,
                minutes: 31,
                duration: "7:00 AM - 9:30 AM"
            },
            {
                name: "Meeting name",
                description: "I would like to send the presentation we've discussed today. You may find it be... ",
                viewCount: 14,
                minutes: 17,
                duration: "9:00 AM - 11:30 AM"
            },
            {
                name: "New project about selling",
                description: "I would like to send the presentation we've discussed today. You...",
                viewCount: 8,
                minutes: 11,
                duration: "8:30 AM - 9:05 AM"
            },
            {
                name: "Meeting name",
                description: "I would like to send the presentation we've discussed today. You may find it be... ",
                viewCount: 9,
                minutes: 34,
                duration: "10:00 AM - 11:30 AM"
            },
            {
                name: "New project about selling",
                description: "I would like to send the presentation we've discussed today. You...",
                viewCount: 15,
                minutes: 18,
                duration: "7:00 AM - 9:30 AM"
            },
            {
                name: "Meeting name",
                description: "I would like to send the presentation we've discussed today. You may find it be... ",
                viewCount: 33,
                minutes: 8,
                duration: "7:00 AM - 9:30 AM"
            }
        ]
    };

    res.statusCode = 200;
    res.json(listMeeting)
}
