import { toast } from "@/hooks/use-toast";

export const showToast = (
  title: string,
  description?: string,
  type?: "default" | "destructive"
) => {
  toast({
    title: title,
    description: description,
    variant: type,
  });
  return;
};
