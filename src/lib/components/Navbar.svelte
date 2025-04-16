<script lang="ts">
    import { page } from '$app/stores';
    import Button from './Button.svelte';

    let mobileMenuOpen = false;

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }

    $: isActive = (path: string) => $page.url.pathname === path;
</script>

<nav class="bg-blue-900 text-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <!-- Logo -->
            <div class="flex-shrink-0">
                <a href="/" class="text-2xl font-bold text-white hover:text-yellow-400 transition duration-150">
                    RS3
                </a>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-4">
                <a href="/" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition duration-150"
                   class:text-yellow-400={isActive('/')}
                   class:text-white={!isActive('/')}>
                    Home
                </a>
                <a href="/about" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition duration-150"
                    class:text-yellow-400={isActive('/about')}
                    class:text-white={!isActive('/about')}>
                    About Me
                </a>
                <a href="/testimonials" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition duration-150"
                    class:text-yellow-400={isActive('/testimonials')}
                    class:text-white={!isActive('/testimonials')}>
                    Testimonials
                </a>
                <Button href="/signup" label="Sign Up" variant="primary" />
            </div>

            <!-- Mobile Menu Button -->
            <div class="md:hidden flex items-center">
                <button on:click={toggleMobileMenu} type="button" class="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded={mobileMenuOpen}>
                    <span class="sr-only">Open main menu</span>
                    {#if !mobileMenuOpen}
                        <i class="fas fa-bars fa-fw text-xl" aria-hidden="true"></i>
                    {:else}
                        <i class="fas fa-times fa-fw text-xl" aria-hidden="true"></i>
                    {/if}
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
        <div class="md:hidden" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                 <a href="/" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition duration-150"
                    class:text-yellow-400={isActive('/')}
                    class:text-white={!isActive('/')} on:click={() => mobileMenuOpen = false}>
                    Home
                </a>
                <a href="/about" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition duration-150"
                    class:text-yellow-400={isActive('/about')}
                    class:text-white={!isActive('/about')} on:click={() => mobileMenuOpen = false}>
                    About Me
                </a>
                 <a href="/testimonials" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition duration-150"
                    class:text-yellow-400={isActive('/testimonials')}
                    class:text-white={!isActive('/testimonials')} on:click={() => mobileMenuOpen = false}>
                    Testimonials
                </a>
                <div class="pt-2">
                     <Button href="/signup" label="Sign Up" variant="primary" onClick={() => mobileMenuOpen = false}/>
                </div>
            </div>
        </div>
    {/if}
</nav>
