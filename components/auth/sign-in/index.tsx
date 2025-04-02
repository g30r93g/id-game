"use client";

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {LoadingButton} from "@/components/ui/loading-button";
import {ArrowRight} from "lucide-react";
import * as Clerk from '@clerk/elements/common'
import * as ClerkSignIn from '@clerk/elements/sign-in'

export default function SignIn() {
  return (
    // <Form {...form}>
    //   <form onSubmit={form.handleSubmit(onSignInSubmit)} className="space-y-6">
    //     <FormField
    //       control={form.control}
    //       name="email"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel>Email</FormLabel>
    //           <FormControl>
    //             <Input {...field} className={"bg-white"} type={"email"} autoComplete={"email"} />
    //           </FormControl>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />
    //     <FormField
    //       control={form.control}
    //       name="password"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel>Password</FormLabel>
    //           <FormControl>
    //             <Input {...field} className={"bg-white"} type={"password"} autoComplete={"current-password"} />
    //           </FormControl>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />
    //     <LoadingButton
    //       loading={form.formState.isLoading}
    //       disabled={form.formState.isLoading}
    //       className={"float-right"}
    //     >
    //       {!form.formState.isLoading && (
    //         <>
    //           Sign In
    //           <ArrowRight />
    //         </>
    //       )}
    //     </LoadingButton>
    //   </form>
    // </Form>
    <ClerkSignIn.Root>
      <ClerkSignIn.Step name="start">
        <h1>Sign in to your account</h1>

        <Clerk.Connection name="google">Sign in with Google</Clerk.Connection>

        <Clerk.Field name="identifier">
          <Clerk.Label>Email</Clerk.Label>
          <Clerk.Input />
          <Clerk.FieldError />
        </Clerk.Field>

        <ClerkSignIn.Action submit>Continue</ClerkSignIn.Action>
      </ClerkSignIn.Step>
    </ClerkSignIn.Root>
  )
}