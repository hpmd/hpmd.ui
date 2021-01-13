<template>
    <div class="bg-white p-5 shadow rounded mb-8">
        <h2 class="mb-5">Progress bar</h2>

        <div class="row">
            <div class="col">
                <div class="mt-4">
                    <h4>Empty</h4>
                    <hm-progress>
                        <hm-progress-bar label="empty"></hm-progress-bar>
                    </hm-progress>
                </div>

                <div class="mt-5">
                    <h4>Solid</h4>
                    <hm-progress
                        class="mt-4"
                        height="2px"
                        :value="55"
                        variant="primary" />
                    <hm-progress
                        class="mt-4"
                        height="4px"
                        :value="23"
                        variant="warning" />
                    <hm-progress
                        class="mt-4"
                        height="8px"
                        :value="94"
                        variant="danger" />
                    <hm-progress
                        class="mt-4"
                        height="16px"
                        :value="44"
                        variant="dark" />
                </div>

                <div class="mt-5">
                    <h4>Animated</h4>
                    <hm-progress
                        class="mt-4"
                        height="2px"
                        :value="55"
                        variant="primary"
                        animated />
                    <hm-progress
                        class="mt-4"
                        height="4px"
                        :value="23"
                        variant="warning"
                        animated />
                    <hm-progress
                        class="mt-4"
                        height="8px"
                        :value="94"
                        variant="danger"
                        animated />
                    <hm-progress
                        class="mt-4"
                        height="16px"
                        :value="44"
                        variant="dark"
                        animated />
                </div>

                <div class="mt-5">
                    <h4>Multiple bars</h4>
                    <hm-progress max="100">
                        <hm-progress-bar value="24" variant="primary" show-progress></hm-progress-bar>
                        <hm-progress-bar value="13" variant="warning" show-progress></hm-progress-bar>
                        <hm-progress-bar value="33" variant="danger" show-progress></hm-progress-bar>
                    </hm-progress>
                </div>
            </div>
        </div>
    </div>
</template>
