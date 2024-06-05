import { getCurrentUser } from 'aws-amplify/auth';

export async function checkAuthentication() {
    try {
        await getCurrentUser();
        return true;
    } catch (error) {
        return false;
    }
}
