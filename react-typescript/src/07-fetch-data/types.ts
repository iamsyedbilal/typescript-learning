import { z } from "zod";

export const TourSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  info: z.string(),
  price: z.string(),
});

export type Tour = z.infer<typeof TourSchema>;

// React Query
export const fetchData = async (): Promise<Tour[]> => {
  const response = await fetch(
    "https://www.course-api.com/react-tours-project",
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  const parsedData = TourSchema.array().safeParse(data);
  if (!parsedData.success) {
    throw new Error("Data validation failed");
  }
  return parsedData.data;
};
