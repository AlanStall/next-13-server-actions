"use server";

export async function ChamadaApi(user: string, password: string) {
  const response = await fetch("https://api.github.com/users/AlanStall", {
    // cache: "no-store",
  });
  const body = response.json();

  console.log(body);
  console.log(user);
  console.log(password);
}
