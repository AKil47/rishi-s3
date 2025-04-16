<script lang="ts">
  export let label: string = 'Click Me';
  export let href: string | null = null;
  export let onClick: (() => void) | null = null;
  export let variant: 'primary' | 'secondary' = 'primary';
  export let type: 'button' | 'submit' | 'reset' = 'button'; // Add type prop for form submission

  let baseClasses = "inline-block px-6 py-3 rounded-md font-semibold text-center transition duration-200 ease-in-out shadow-sm";
  let primaryClasses = "bg-yellow-500 text-blue-900 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500";
  // Example secondary style (Outline)
  let secondaryClasses = "border border-blue-900 text-blue-900 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900";

  $: variantClasses = variant === 'primary' ? primaryClasses : secondaryClasses;
  $: finalClasses = `${baseClasses} ${variantClasses}`;
</script>

{#if href}
  <a {href} class={finalClasses} role="button">
    {label}
  </a>
{:else}
  <button {type} class={finalClasses} on:click={onClick}>
    {label}
  </button>
{/if}
