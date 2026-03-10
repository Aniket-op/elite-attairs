import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-8 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <h3 className="font-body text-sm md:text-base font-bold tracking-[0.05em] uppercase text-foreground whitespace-nowrap">
              Join Our Newsletter:
            </h3>
            <p className="font-body text-xs text-muted-foreground hidden sm:block whitespace-nowrap">
              Be the First to Know About New Trends & Offers
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-0 w-full md:w-auto"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 md:w-64 border border-border bg-background px-4 py-2.5 font-body text-xs tracking-wider text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors duration-300"
            />
            <button className="bg-foreground text-primary-foreground px-6 py-2.5 font-body text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-gold hover:text-accent-foreground transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
