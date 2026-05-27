import { Text} from "react-native";
import "@/global.css"
import {styled} from "nativewind"
import { Link } from "expo-router";
import { SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
const SafeAreaView=styled(RNSafeAreaView);
export default function Index() {
  return (
    <SafeAreaView className="flex-1  p-5 bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 px-4 py-2 rounded bg-primary text-white">
        Get Started
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 px-4 py-2 rounded bg-primary text-white">
        Sign In
      </Link>
      <Link href="/(auth)/sign-up" className="mt-4 px-4 py-2 rounded bg-primary text-white">
        Sign Up
      </Link>
      <Link href="/subscriptions/spotify" className="mt-4 px-4 py-2 rounded bg-primary text-white">
        Subscription spotify
      </Link>
      <Link className="mt-4 px-4 py-2 rounded bg-primary text-white" href={{
        pathname: "/subscriptions/[id]",
        params: { id: "claude" },
      }}> Claude Subscription 
      </Link>
    </SafeAreaView>
  );
}
