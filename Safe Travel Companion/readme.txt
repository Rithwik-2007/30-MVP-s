SafeWalk - MVP (Safe Travel Companion)

Core Purpose

SafeWalk is a women-focused night travel companion web app designed to reduce anxiety and provide quick access to help. It prioritizes simplicity, ease of use under stress, and privacy. It is not a social network. It is a "guardian angel" tool.

Features (MVP)

1. Live Route Simulation

Concept: Users enter a destination, and the app "generates" safe routes (mocked for MVP) based on safety scores (lighting, patrols).

Visualization: Includes a clean, abstract map interface showing progress.

Assurance: Clearly shows trusted contacts who are currently viewing the location.

2. The Panic Button

Always Accessible: A large, floating button on every screen.

Behavior: Triggers an immersive "Panic Overlay" that simulates sending location data and playing an alarm.

User Experience: High contrast but not aggressive. Offers a "Call Police" shortcut and an easy way to cancel if tapped by mistake.

3. Journey Check-ins

Mechanism: Simulates the concept of "Did you reach safely?".

Visuals: A progress bar and notification card during the journey to reassure the user that the app is monitoring their ETA.

4. Privacy & Design

Theme: Soft pinks, white, and muted purples. No neon, no dark patterns.

Data: Minimal profile (Name + Emergency Contacts). No public feeds.

Tech: Single-file React application using Tailwind CSS for rapid styling.

How to Test

Start: Click the "Current Location" or "Enter Destination" input on the home screen.

Type: Enter a location (e.g., "Home").

Select Route: Choose one of the AI-suggested routes (e.g., "Main Avenue").

Panic: Click the floating warning icon (bottom right) at any time to see the emergency state.

Finish: Click "I Arrived Safely" to reset the flow.

Future Improvements

Real Maps API: Integrate Google Maps or Mapbox for real-time routing.

SMS Gateway: Connect the panic button to Twilio/Vonage to actually send SMS alerts.

Geofencing: Automate the "I'm Safe" check-in when the GPS coordinates match the destination.