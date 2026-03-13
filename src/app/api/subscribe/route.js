export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return Response.json(
        { success: false, message: "Valid email is required." },
        { status: 400 },
      );
    }

    // In production: save to DB / send to email service (e.g. Mailchimp, Resend)
    console.log(`New early alpha signup: ${email}`);

    return Response.json({
      success: true,
      message: "You're on the list! We'll be in touch.",
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
