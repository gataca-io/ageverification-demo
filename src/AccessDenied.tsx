import BaseLayout from "./components/BaseLayout";
import RestrictedModal from "./components/RestrictedModal";


const AccessDenied = (props:any) => {
  return (
    <BaseLayout footerText="If you believe this is an error, please contact support.">
      <RestrictedModal>
      </RestrictedModal>
    </BaseLayout>
  );
};

export default AccessDenied;