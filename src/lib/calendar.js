import { webinarData } from '../data/webinarData';

/**
 * Generates and downloads a standardized RFC 5545 .ics calendar file.
 * Reads event title, date, description, and times directly from centralized webinarData.
 */
export function generateICS() {
  const { event, brand } = webinarData;

  // Format: 25 Nov 2026, 4:00 PM - 5:30 PM IST (UTC: 10:30 - 12:00)
  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Manvian//AI for Manufacturing Webinar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:manvian-webinar-20261125T103000Z@manvian.com`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    'DTSTART:20261125T103000Z',
    'DTEND:20261125T120000Z',
    `SUMMARY:${event.fullTitle}`,
    `DESCRIPTION:${event.description}\\n\\nFormat: ${event.format}\\nPlatform: ${event.platform}\\nOrganizer: ${brand.name} (${brand.contactEmail})`,
    `LOCATION:${event.format} - Online Live Broadcast`,
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-PT15M',
    'ACTION:DISPLAY',
    `DESCRIPTION:Reminder: ${event.fullTitle} begins in 15 minutes`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  const blob = new Blob([icsLines.join('\r\n')], {
    type: 'text/calendar;charset=utf-8',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'AI-for-Manufacturing-Webinar.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Builds Google Calendar event creation URL directly from centralized webinarData.
 */
export function getGoogleCalendarUrl() {
  const { event, brand } = webinarData;
  const title = encodeURIComponent(event.fullTitle);
  const details = encodeURIComponent(
    `${event.description}\n\nFormat: ${event.format}\nPlatform: ${event.platform}\nOrganizer: ${brand.name} (${brand.contactEmail})`
  );
  const location = encodeURIComponent(`${event.format} (Manvian Live Broadcast)`);
  // 4:00 PM - 5:30 PM IST is 10:30 - 12:00 UTC
  const dates = '20261125T103000Z/20261125T120000Z';
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
}
