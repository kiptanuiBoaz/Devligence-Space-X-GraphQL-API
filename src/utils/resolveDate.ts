import { format, parse } from "date-fns";

// Date formats present in the jokes data
const dateFormats = [
    "M/dd/yyyy",
    "MM/dd/yyyy",
    "yyyy-MM-dd",
    "dd.MM.yyyy",
    "yyyy-MM-dd'T'HH:mm:ss.SSSX",
    "yyyy-MM-dd'T'HH:mm:ssX", // Adding the provided format
    "yyyy-MM-dd'T'HH:mm:ssXXX" // Adding format with time zone offset
];

// Final display format
const requiredFormat = "dd MMM yyyy";

// Try all the formats for the current unformatted date
const formatDate = (dateString: string, inputFormats: string[], outputFormat: string) => {
    for (const inputFormat of inputFormats) {
        try {
            const parsedDate = parse(dateString, inputFormat, new Date());
            return format(parsedDate, outputFormat);
        } catch (error) {
            // Ignore parse errors for this format and continue to the next one
        }
    }
    return "Invalid Date";
};

// Parent function
export const dateFnsFormat = (unformattedDate: string) => formatDate(unformattedDate, dateFormats, requiredFormat);
