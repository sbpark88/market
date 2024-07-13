import Form from "@/app/ui/auth/register-form";
import AuthFromWrapper from "@/app/ui/auth/auth-form-wrapper";

export default function Page() {
  return (
    <AuthFromWrapper>
      <Form />
    </AuthFromWrapper>
  );
}
