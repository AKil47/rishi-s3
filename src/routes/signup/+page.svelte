<script lang="ts">
    import { tick } from 'svelte';
    import Button from '$lib/components/Button.svelte';
    import { subjectNames } from '$lib/subjects'; // Import only the names

    // Form state
    let studentName: string = '';
    let gradeLevel: string = '';
    let interestedTopics: string[] = [];
    let otherTopicSpecify: string = '';
    let preferredMode: string = '';
    let zipCode: string = '';

    // Validation errors
    let errors: Record<string, string | null> = {};

    // Form submission status
    let formSubmitted = false;
    let formSuccessMessage = "Thank you for your interest! Your request has been submitted. Rishi will personally email you soon to discuss details and potential scheduling.";

    // Available Options
    const gradeOptions = ["High School (Grades 9-12)", "College (Year 1-2)", "Other"];
    // Derive topic options from central list and add the specific "Other" form option
    const topicOptions = [...subjectNames, "Other (Please specify below)"];
    const modeOptions = ["Online (via Zoom)", "In-Person (College Station / Austin areas only)"];

    // Conditional Logic Flags
    $: showOtherTopicSpecify = interestedTopics.includes("Other (Please specify below)");
    $: showZipCode = preferredMode === "In-Person (College Station / Austin areas only)";

    // --- Validation Function ---
    function validateForm(): boolean {
        errors = {}; // Reset errors

        if (!studentName.trim()) {
            errors.studentName = "Student Name is required.";
        }
        if (!gradeLevel) {
            errors.gradeLevel = "Please select a Grade Level.";
        }
        if (interestedTopics.length === 0) {
            errors.interestedTopics = "Please select at least one Interested Topic.";
        }
        if (showOtherTopicSpecify && !otherTopicSpecify.trim()) {
            errors.otherTopicSpecify = "Please specify the 'Other' topic.";
        }
        if (!preferredMode) {
             errors.preferredMode = "Please select a Preferred Mode.";
        }
        if (showZipCode && !zipCode.trim()) {
            errors.zipCode = "Zip Code is required for In-Person requests.";
        } else if (showZipCode && !/^\d{5}(-\d{4})?$/.test(zipCode.trim())) {
             errors.zipCode = "Please enter a valid 5-digit Zip Code.";
        }

        return Object.keys(errors).length === 0;
    }

    // --- Form Submission Handler ---
    async function handleSubmit() {
        const isValid = validateForm();
        if (isValid) {
            console.log('Form Submitted (Frontend Only)');
            console.log({
                studentName,
                gradeLevel,
                interestedTopics,
                otherTopicSpecify: showOtherTopicSpecify ? otherTopicSpecify : undefined,
                preferredMode,
                zipCode: showZipCode ? zipCode : undefined
            });

            formSubmitted = true;

            await tick();
            const successMsgElement = document.getElementById('success-message');
            successMsgElement?.scrollIntoView({ behavior: 'smooth' });

        } else {
            console.log('Form Validation Failed:', errors);
            await tick();
            const firstErrorField = document.querySelector('.error-message');
            firstErrorField?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    function clearError(fieldName: keyof typeof errors) {
        if (errors[fieldName]) {
            errors[fieldName] = null;
        }
    }

</script>

<svelte:head>
    <title>Sign Up for Tutoring | RS3 Tutoring</title>
    <meta name="description" content="Sign up for free STEM tutoring with Rishi Soni. Fill out the interest form to get started." />
</svelte:head>

<section class="py-12 md:py-16 max-w-2xl mx-auto">
    <h1 class="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">Tutoring Interest Form</h1>
    <p class="text-gray-700 mb-8 text-center">
        Interested in free STEM tutoring? Please fill out the form below. There's no commitment at this stage. Rishi will personally review your request and email you to discuss details, availability, and scheduling options.
    </p>

    {#if formSubmitted}
        <div id="success-message" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Success!</strong>
            <span class="block sm:inline"> {formSuccessMessage}</span>
        </div>
    {:else}
        <form on:submit|preventDefault={handleSubmit} novalidate class="space-y-6">

            <!-- Student Name -->
            <div>
                <label for="studentName" class="block text-sm font-medium text-blue-900 mb-1">Student Name(s) <span class="text-red-600">*</span></label>
                <span class="text-xs text-gray-500 block mb-1">(If group, list all separated by commas)</span>
                <input type="text" id="studentName" bind:value={studentName} on:input={() => clearError('studentName')}
                       class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                       class:border-red-500={errors.studentName}
                       class:border-gray-300={!errors.studentName}
                       required aria-describedby={errors.studentName ? 'studentName-error' : undefined} />
                {#if errors.studentName}
                    <p id="studentName-error" class="error-message text-red-600 text-sm mt-1">{errors.studentName}</p>
                {/if}
            </div>

            <!-- Grade Level -->
            <div>
                <label for="gradeLevel" class="block text-sm font-medium text-blue-900 mb-1">Grade Level <span class="text-red-600">*</span></label>
                <select id="gradeLevel" bind:value={gradeLevel} on:change={() => clearError('gradeLevel')}
                        class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white"
                         class:border-red-500={errors.gradeLevel}
                         class:border-gray-300={!errors.gradeLevel}
                        required aria-describedby={errors.gradeLevel ? 'gradeLevel-error' : undefined}>
                    <option value="" disabled>Select Grade Level</option>
                    {#each gradeOptions as option}
                        <option value={option}>{option}</option>
                    {/each}
                </select>
                 {#if errors.gradeLevel}
                    <p id="gradeLevel-error" class="error-message text-red-600 text-sm mt-1">{errors.gradeLevel}</p>
                {/if}
            </div>

            <!-- Interested Topics -->
            <div>
                <fieldset>
                    <legend class="block text-sm font-medium text-blue-900 mb-2">Interested Topic(s) <span class="text-red-600">*</span></legend>
                    <div class="space-y-2">
                        {#each topicOptions as topic}
                        <label class="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" bind:group={interestedTopics} value={topic} on:change={() => clearError('interestedTopics')}
                                   class="h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500 cursor-pointer">
                            <span class="text-gray-700">{topic}</span>
                        </label>
                        {/each}
                    </div>
                     {#if errors.interestedTopics}
                        <p id="interestedTopics-error" class="error-message text-red-600 text-sm mt-1">{errors.interestedTopics}</p>
                    {/if}
                </fieldset>
            </div>

             <!-- Other Topic Specify (Conditional) -->
            {#if showOtherTopicSpecify}
             <div class="transition-all duration-300 ease-in-out">
                <label for="otherTopicSpecify" class="block text-sm font-medium text-blue-900 mb-1">If Other, please specify topic(s) <span class="text-red-600">*</span></label>
                <input type="text" id="otherTopicSpecify" bind:value={otherTopicSpecify} on:input={() => clearError('otherTopicSpecify')}
                       class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                       class:border-red-500={errors.otherTopicSpecify}
                       class:border-gray-300={!errors.otherTopicSpecify}
                       required={showOtherTopicSpecify} aria-describedby={errors.otherTopicSpecify ? 'otherTopicSpecify-error' : undefined} />
                 {#if errors.otherTopicSpecify}
                    <p id="otherTopicSpecify-error" class="error-message text-red-600 text-sm mt-1">{errors.otherTopicSpecify}</p>
                {/if}
             </div>
            {/if}

            <!-- Preferred Mode -->
             <div>
                <fieldset>
                    <legend class="block text-sm font-medium text-blue-900 mb-2">Preferred Mode <span class="text-red-600">*</span></legend>
                    <div class="space-y-2">
                        {#each modeOptions as mode}
                        <label class="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" bind:group={preferredMode} value={mode} name="preferredMode" on:change={() => clearError('preferredMode')}
                                    class="h-4 w-4 border-gray-300 text-yellow-500 focus:ring-yellow-500 cursor-pointer">
                            <span class="text-gray-700">{mode}</span>
                        </label>
                        {/each}
                    </div>
                     {#if errors.preferredMode}
                        <p id="preferredMode-error" class="error-message text-red-600 text-sm mt-1">{errors.preferredMode}</p>
                    {/if}
                </fieldset>
            </div>

            <!-- Zip Code (Conditional) -->
             {#if showZipCode}
             <div class="transition-all duration-300 ease-in-out">
                <label for="zipCode" class="block text-sm font-medium text-blue-900 mb-1">Your Zip Code (for In-Person) <span class="text-red-600">*</span></label>
                <input type="text" inputmode="numeric" pattern="[0-9]{5}" id="zipCode" bind:value={zipCode} on:input={() => clearError('zipCode')}
                       class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                       class:border-red-500={errors.zipCode}
                       class:border-gray-300={!errors.zipCode}
                       required={showZipCode} aria-describedby={errors.zipCode ? 'zipCode-error' : undefined} />
                {#if errors.zipCode}
                    <p id="zipCode-error" class="error-message text-red-600 text-sm mt-1">{errors.zipCode}</p>
                {/if}
             </div>
            {/if}

            <!-- Submission Button -->
            <div class="pt-4 text-center">
                 <Button type="submit" label="Submit Request" variant="primary" />
            </div>
        </form>
    {/if}

</section>
